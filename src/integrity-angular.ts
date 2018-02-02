export { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
// export { QrCodeDialogComponent } from './components/qr-code-dialog/qr-code-dialog.component';
export { SimpleInputDialogComponent } from './components/simple-input-dialog/simple-input-dialog.component';

export { ClipboardDirective } from './directives/clipboard.directive';
export { DragAndDropDirective } from './directives/drag-and-drop.directive';

export { ClipboardService } from './services/clipboard.service';
export { EventsService } from './services/events.service';

import { ClipboardModule } from './modules/clipboard.module';
import { ConfirmationDialogModule } from './modules/confirmation-dialog.module';
import { DragAndDropModule } from './modules/drag-and-drop.module';
import { EventsModule } from './modules/events.module.';
// import { QrCodeDialogModule } from './modules/qr-code-dialog.module';
import { SimpleInputDialogModule } from './modules/simple-input-dialog.module';
