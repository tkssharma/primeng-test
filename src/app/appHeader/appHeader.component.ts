import {Component, OnInit} from '@angular/core';
import {ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';

export interface Message {
    severity?: string;
    summary?: string;
    detail?: string;
    id?: any;
}

@Component({selector: 'app-header', templateUrl: './appHeader.component.html', styleUrls: ['./appHeader.component.css']})
export class AppHeaderComponent implements OnInit {

    constructor(private confirmationService : ConfirmationService) {}

    msgs: Message[] = [];
    
    ngOnInit(){}

    confirmLogout(e) {
        // e.preventDefault(); e.stopPropagation();
        this
            .confirmationService
            .confirm({
                message: 'Are you sure that you want to logout?',
                header: 'Confirmation',
                icon: 'fa fa-question-circle',
                accept: () => {
                    this.msgs = [
                        {
                            severity: 'info',
                            summary: 'Confirmed',
                            detail: 'You have accepted'
                        }
                    ];
                    var win=window.open("","_self");
                    win.close();
                },
                reject: () => {
                    this.msgs = [
                        {
                            severity: 'info',
                            summary: 'Rejected',
                            detail: 'You have rejected'
                        }
                    ];
                }
            });
    }


}
