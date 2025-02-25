import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Gesture-Controlled UI Dashboard</h1>
    <div class="dashboard">
      <gesture-control></gesture-control>
      <wasm-motion-detection></wasm-motion-detection>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }