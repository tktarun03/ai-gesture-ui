import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'gesture-control',
  styleUrl: 'gesture-control.css',
  shadow: true
})
export class GestureControl {
  @State() action: string = "Waiting for gesture input...";

  detectGesture() {
    const gestures = [
      "Swipe Left ⬅️ - Navigating Back",
      "Swipe Right ➡️ - Moving Forward",
      "Zoom In 🔍 - Increasing Scale",
      "Zoom Out 🔎 - Decreasing Scale",
      "Wave Hand ✋ - Activating Voice Assistant"
    ];
    this.action = gestures[Math.floor(Math.random() * gestures.length)];
  }

  render() {
    return (
      <div class="gesture-box">
        <h2>AI Gesture-Controlled UI</h2>
        <button onClick={() => this.detectGesture()}>Simulate Gesture</button>
        <p>{this.action}</p>
      </div>
    );
  }
}
