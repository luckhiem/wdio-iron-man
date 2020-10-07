import { ipcMain, dialog, app, OpenDialogOptions } from 'electron';
import path from 'path';

ipcMain.on('show-open-dialog', (event, arg) => {
    let globalFile: string;
    const options: OpenDialogOptions = {
        title: 'Select the File to be uploaded',
        defaultPath: path.join(__dirname, '../assets/'),
        buttonLabel: 'Upload',
        properties: ['openDirectory']
    };


    dialog.showOpenDialog(null, options).then((file: any) => {
        console.log('showOpenDialog', file)
        event.sender.send('open-dialog-paths-selected', file);
        if (!file.canceled) {
            globalFile = file.filePaths[0].toString();
            event.reply('reply-show-open-dialog', { status: 'SUCCESS', file: globalFile });
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