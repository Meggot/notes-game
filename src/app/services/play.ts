import { Injectable } from "@angular/core";
import { Injector } from "@angular/core";
import * as Tone from 'tone'

@Injectable()
export class Play {
    constructor() {
    }

 synth  = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
 playNoteOn(note: String, on: String) {
    this.synth.triggerAttackRelease("C4", "8n");
}
}