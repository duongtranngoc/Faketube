Ext.define('FaketubeFrontend.overrides.Textfield', {
    override: 'Ext.form.field.Text',
    cls: 'field-csstyle',
    
    labelAlign: 'top',
    blankText: 'Không được để trống trường này!',
    minLengthText: 'Bạn cần nhập tối thiểu {0} ký tự.',
    maxLengthText: 'Bạn chỉ được nhấp tối đa {0} ký tự.',
    msgTarget: 'under'
})