/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'FaketubeFrontend.Application',

    name: 'FaketubeFrontend',

    requires: [
        // This will automatically load all classes in the FaketubeFrontend namespace
        // so that application classes do not need to require each other.
        'FaketubeFrontend.*'
    ]
});