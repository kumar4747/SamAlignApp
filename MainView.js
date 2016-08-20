Ext.define('SamAlignApp.MainView',{
    extend: 'Ext.container.Viewport',
    layout: 'border',
    items: [
        {
            region : 'north',
            xtype: 'container',
            layout: 'column',
            margin: '3 3 3 3',
            width: '100%',
            items: [
                {
                    xtype: 'container',
                    columnWidth: .5,
                    items: [
                        {
                            xtype: 'button',
                            text: 'Save'
                        }
                    ]
                },
                {
                	xtype: 'container',
                	columnWidth: .5,
                	layout: {
                		type: 'hbox',
                		pack: 'end'
                    },
                    items: [
                        {
                        	xtype: 'textfield',
                			fieldLabel:'Name'
                        }
                    ]
                }
                
            ]
        },
        {
        	region: 'center',
        	html: 'Hello World!'
        }
    ]
});