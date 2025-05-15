exports.version = 1.1
exports.apiRequired = 8.1
exports.description = "Prevent closing dialogs by clicking the outside area. Useful on mobile to avoid accidental closes. Adds toggle in options."
exports.repo = "Hug3O/Prevent-dialog-close"
exports.frontend_js = "main.js"

exports.config = {
  preventDialogClose: {
    type: 'boolean',
    label: 'Prevent dialog close on outside click',
    defaultValue: true,
    frontend: true
  }
}
