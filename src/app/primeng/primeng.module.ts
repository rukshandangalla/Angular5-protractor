import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    InputTextModule,
    ButtonModule,
    DataTableModule,
    AccordionModule,
    SidebarModule,
    MenuModule,
    MenuItem,
    ConfirmDialogModule,
    ConfirmationService,
    CalendarModule,
    DialogModule,
    MultiSelect,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    MessagesModule,
    GrowlModule,
    InputSwitchModule,
    InputMaskModule,
    FileUploadModule,
    InputTextareaModule,
    PanelMenuModule,
    AutoCompleteModule,
    ProgressBarModule,
    MultiSelectModule,
    Checkbox
} from 'primeng/primeng';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
@NgModule({
    imports: [CommonModule],
    exports: [
        InputTextModule,
        ButtonModule,
        DataTableModule,
        AccordionModule,
        SidebarModule,
        MenuModule,
        ConfirmDialogModule,
        CalendarModule,
        DialogModule,
        DropdownModule,
        CheckboxModule,
        RadioButtonModule,
        TabViewModule,
        MessagesModule,
        GrowlModule,
        InputSwitchModule,
        FileUploadModule,
        InputTextareaModule,
        PanelMenuModule,
        AutoCompleteModule,
        ProgressBarModule,
        InputMaskModule,
        CardModule,
        TableModule,
        MultiSelectModule
    ],
    providers: [ConfirmationService]
})
export class PrimeNgModule { }