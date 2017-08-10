import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'upvote',
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
                <div class="votingButton">
                    <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
                    <i *ngIf="!voted" class="glyphicon gluphicon-heart-empty"></i>                    
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['app/events/event-details/upvote.component.css']
})

export class UpvoteComponent implements OnInit {
    @Input() count: number
    @Input() voted: boolean
    @Output() vote = new EventEmitter()

    constructor() { }

    ngOnInit() { }
    
    onclick() {
        this.vote.emit({})
    }
}