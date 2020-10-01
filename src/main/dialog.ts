import { ipcMain, dialog, app, OpenDialogOptions } from 'electron';
import fs from 'fs';
import path from 'path';

ipcMain.on('show-open-dialog', (event, arg) => {
    const options: OpenDialogOptions = {
        title: 'Select the File to be uploaded',
        defaultPath: path.join(__dirname, '../assets/'),
        buttonLabel: 'Upload',
        properties: ['openFile']
    };


    dialog.showOpenDialog(null, options).then((file: any) => {
        console.log('filePaths', file)
        event.sender.send('open-dialog-paths-selected', file);
        if (!file.canceled) {
            var globalFile: string;
            globalFile = file.filePaths[0].toString();
            fs.readFile(globalFile, { encoding: 'utf-8' }, function (err, data) {
                if (!err) {
                    console.log('received data: ' + data);
                } else {
                    console.log(err);
                }
            });
            console.log('global', global);
        }
    })
})

// ipcMain.on('show-error-box', (event, arg) => {
//     dialog.showErrorBox('Oops! Something went wrong!', 'Help us improve your experience by sending an error report')
// });

// ipcMain.on('show-message-box', (event, arg) => {
//     const options = {
//         type: 'question',
//         buttons: ['Cancel', 'Yes, please', 'No, thanks'],
//         defaultId: 2,
//         title: 'Question',
//         message: 'Do you want to do this?',
//         detail: 'It does not really matter',
//         checkboxLabel: 'Remember my answer',
//         checkboxChecked: true,
//     };

//     dialog.showMessageBox(null, options, (response, checkboxChecked) => {
//         event.sender.send('show-message-box-response', [response, checkboxChecked]);
//     });
// });

// ipcMain.on('show-save-dialog', (event, arg) => {
//     const options = {
//         title: 'Save current page as a pdf',
//         defaultPath: app.getPath('documents') + '/electron-tutorial-app.pdf',
//     }
//     dialog.showSaveDialog(null, options, (path) => {
//         console.log(path);
//     });
// })