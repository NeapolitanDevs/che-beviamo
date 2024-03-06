import { Directive, HostListener, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DetailDialogComponent } from 'src/shared/detail-dialog/detail-dialog.component';

@Directive({
	selector: '[dialog]',
})
export class DialogDirective {
	@Input() dialogTitle: any;
	@Input() dialogMessage: any;
	@Input() type: any;

	constructor(private dialog: MatDialog) {}

	@HostListener('click', ['$event'])
	onclick(value: any): void {
		const matDialogConfig: MatDialogConfig = {
			autoFocus: false,
			restoreFocus: false,
			width: '500px',
		};
		value.preventDefault();
		this.dialog.open(DetailDialogComponent, {...matDialogConfig, data: {title: this.dialogTitle, descr: this.dialogMessage, type: this.type}});
	}
}
