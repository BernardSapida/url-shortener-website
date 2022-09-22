import ClipboardJS from '../../node_modules/clipboard/dist/clipboard.min.js'

var clipboard = new ClipboardJS('.clipboard');
clipboard.on('success', (e) => e.clearSelection());