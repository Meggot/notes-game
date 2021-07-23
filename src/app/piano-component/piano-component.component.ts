import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone'

@Component({
  selector: 'app-piano-component',
  templateUrl: './piano-component.component.html',
  styleUrls: ['./piano-component.component.css']
})
export class PianoComponentComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  play(note: string, on: string){
    var synth  = new Tone.Synth().toDestination();
      synth.triggerAttackRelease(note, on);
  }
}
