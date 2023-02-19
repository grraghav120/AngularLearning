import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
})
export class ImageUploadComponent implements OnInit {
  @ViewChild('canvas') canvasRef: ElementRef;
  cropSrc: any;
  image: HTMLImageElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  isCancel: boolean = false;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  isDragging: boolean = false;
  croppedCanvas: any;
  croppedCtx: any;
  constructor() {}
  ngOnInit(): void {}

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.image = new Image();
        this.image.src = e.target.result;
        this.image.onload = () => {
          this.canvas = this.canvasRef.nativeElement;
          this.ctx = this.canvas.getContext('2d');
          this.canvas.width = this.image.width;
          this.canvas.height = this.image.height;
          this.ctx.drawImage(this.image, 0, 0);
        };
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onTouchStart(event: TouchEvent) {
    const touch = event.touches[0];
    const rect = this.canvas.getBoundingClientRect();
    this.startX = touch.clientX - rect.left;
    this.startY = touch.clientY - rect.top;
    this.isDragging = true;
  }

  onTouchMove(event: TouchEvent) {
    if (this.isDragging) {
      const touch = event.touches[0];
      const rect = this.canvas.getBoundingClientRect();
      this.endX = touch.clientX - rect.left;
      this.endY = touch.clientY - rect.top;
      this.draw();
    }
  }

  onTouchEnd(event: TouchEvent) {
    this.isDragging = false;
  }

  onMouseDown(event: MouseEvent) {
    this.startX = event.offsetX;
    this.startY = event.offsetY;
    this.isDragging = true;
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.endX = event.offsetX;
      this.endY = event.offsetY;
      this.draw();
    }
  }

  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
  }

  draw(): void {
    // if(!this.isCancel){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.image, 0, 0);

    // Draw the semi-transparent black overlay
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw the rectangle around the cropped area
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this.ctx.fillRect(
      this.startX,
      this.startY,
      this.endX - this.startX,
      this.endY - this.startY
    );
    this.ctx.clip();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.restore();

    // Draw the cropped image on a new canvas
    this.croppedCanvas = document.createElement('canvas');
    this.croppedCanvas.width = this.endX - this.startX;
    this.croppedCanvas.height = this.endY - this.startY;
    this.croppedCtx = this.croppedCanvas.getContext('2d');
    this.croppedCtx.drawImage(
      this.image,
      this.startX,
      this.startY,
      this.croppedCanvas.width,
      this.croppedCanvas.height,
      0,
      0,
      this.croppedCanvas.width,
      this.croppedCanvas.height
    );
    const dataUrl = this.croppedCanvas.toDataURL();
    this.cropSrc = dataUrl;
  }
  onCancel() {
    this.cropSrc = '';
  }

  save() {
    const croppedImage = this.ctx.getImageData(
      this.startX,
      this.startY,
      this.endX - this.startX,
      this.endY - this.startY
    );
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = croppedImage.width;
    tempCanvas.height = croppedImage.height;
    const croppedImageSrc = tempCanvas.toDataURL('image/png');
    const base64Data = croppedImageSrc.split(',')[1];
    console.log(base64Data);
  }
}
