﻿cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-console.logger",
    "file": "plugins/cordova-plugin-console/www/logger.js",
    "pluginId": "cordova-plugin-console",
    "clobbers": [
      "cordova.logger"
    ]
  },
  {
    "id": "cordova-plugin-console.console",
    "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
    "pluginId": "cordova-plugin-console",
    "clobbers": [
      "console"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.NotificationProxy",
    "file": "plugins/cordova-plugin-dialogs/src/windows/NotificationProxy.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      ""
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.StatusBarProxy",
    "file": "plugins/cordova-plugin-statusbar/src/windows/StatusBarProxy.js",
    "pluginId": "cordova-plugin-statusbar",
    "runs": true
  },
  {
    "id": "cordova-plugin-vibration.VibrationProxy",
    "file": "plugins/cordova-plugin-vibration/src/windows/VibrationProxy.js",
    "pluginId": "cordova-plugin-vibration",
    "runs": true
  },
  {
    "id": "cordova-plugin-vibration.notification",
    "file": "plugins/cordova-plugin-vibration/www/vibration.js",
    "pluginId": "cordova-plugin-vibration",
    "merges": [
      "navigator"
    ]
  },
  {
    "id": "phonegap-plugin-push.PushNotification",
    "file": "plugins/phonegap-plugin-push/www/push.js",
    "pluginId": "phonegap-plugin-push",
    "clobbers": [
      "PushNotification"
    ]
  },
  {
    "id": "phonegap-plugin-push.PushPlugin",
    "file": "plugins/phonegap-plugin-push/src/windows/PushPluginProxy.js",
    "pluginId": "phonegap-plugin-push",
    "merges": [
      ""
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryEntry",
    "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryReader",
    "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryReader"
    ]
  },
  {
    "id": "cordova-plugin-file.Entry",
    "file": "plugins/cordova-plugin-file/www/Entry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Entry"
    ]
  },
  {
    "id": "cordova-plugin-file.File",
    "file": "plugins/cordova-plugin-file/www/File.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.File"
    ]
  },
  {
    "id": "cordova-plugin-file.FileEntry",
    "file": "plugins/cordova-plugin-file/www/FileEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.FileError",
    "file": "plugins/cordova-plugin-file/www/FileError.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileError"
    ]
  },
  {
    "id": "cordova-plugin-file.FileReader",
    "file": "plugins/cordova-plugin-file/www/FileReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileReader"
    ]
  },
  {
    "id": "cordova-plugin-file.FileSystem",
    "file": "plugins/cordova-plugin-file/www/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadOptions",
    "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadOptions"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadResult",
    "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadResult"
    ]
  },
  {
    "id": "cordova-plugin-file.FileWriter",
    "file": "plugins/cordova-plugin-file/www/FileWriter.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileWriter"
    ]
  },
  {
    "id": "cordova-plugin-file.Flags",
    "file": "plugins/cordova-plugin-file/www/Flags.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Flags"
    ]
  },
  {
    "id": "cordova-plugin-file.LocalFileSystem",
    "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.LocalFileSystem"
    ],
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.Metadata",
    "file": "plugins/cordova-plugin-file/www/Metadata.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Metadata"
    ]
  },
  {
    "id": "cordova-plugin-file.ProgressEvent",
    "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.ProgressEvent"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems",
    "file": "plugins/cordova-plugin-file/www/fileSystems.js",
    "pluginId": "cordova-plugin-file"
  },
  {
    "id": "cordova-plugin-file.requestFileSystem",
    "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.requestFileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.resolveLocalFileSystemURI",
    "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.isChrome",
    "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.FileProxy",
    "file": "plugins/cordova-plugin-file/src/windows/FileProxy.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.fileSystemPaths",
    "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "cordova"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-media-capture.CaptureAudioOptions",
    "file": "plugins/cordova-plugin-media-capture/www/CaptureAudioOptions.js",
    "pluginId": "cordova-plugin-media-capture",
    "clobbers": [
      "CaptureAudioOptions"
    ]
  },
  {
    "id": "cordova-plugin-media-capture.CaptureImageOptions",
    "file": "plugins/cordova-plugin-media-capture/www/CaptureImageOptions.js",
    "pluginId": "cordova-plugin-media-capture",
    "clobbers": [
      "CaptureImageOptions"
    ]
  },
  {
    "id": "cordova-plugin-media-capture.CaptureVideoOptions",
    "file": "plugins/cordova-plugin-media-capture/www/CaptureVideoOptions.js",
    "pluginId": "cordova-plugin-media-capture",
    "clobbers": [
      "CaptureVideoOptions"
    ]
  },
  {
    "id": "cordova-plugin-media-capture.CaptureError",
    "file": "plugins/cordova-plugin-media-capture/www/CaptureError.js",
    "pluginId": "cordova-plugin-media-capture",
    "clobbers": [
      "CaptureError"
    ]
  },
  {
    "id": "cordova-plugin-media-capture.MediaFileData",
    "file": "plugins/cordova-plugin-media-capture/www/MediaFileData.js",
    "pluginId": "cordova-plugin-media-capture",
    "clobbers": [
      "MediaFileData"
    ]
  },
  {
    "id": "cordova-plugin-media-capture.MediaFile",
    "file": "plugins/cordova-plugin-media-capture/www/MediaFile.js",
    "pluginId": "cordova-plugin-media-capture",
    "clobbers": [
      "MediaFile"
    ]
  },
  {
    "id": "cordova-plugin-media-capture.helpers",
    "file": "plugins/cordova-plugin-media-capture/www/helpers.js",
    "pluginId": "cordova-plugin-media-capture",
    "runs": true
  },
  {
    "id": "cordova-plugin-media-capture.capture",
    "file": "plugins/cordova-plugin-media-capture/www/capture.js",
    "pluginId": "cordova-plugin-media-capture",
    "clobbers": [
      "navigator.device.capture"
    ]
  },
  {
    "id": "cordova-plugin-media-capture.MediaFile2",
    "file": "plugins/cordova-plugin-media-capture/src/windows/MediaFile.js",
    "pluginId": "cordova-plugin-media-capture",
    "merges": [
      "MediaFile"
    ]
  },
  {
    "id": "cordova-plugin-media-capture.CaptureProxy",
    "file": "plugins/cordova-plugin-media-capture/src/windows/CaptureProxy.js",
    "pluginId": "cordova-plugin-media-capture",
    "runs": true
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreenProxy",
    "file": "plugins/cordova-plugin-splashscreen/www/windows/SplashScreenProxy.js",
    "pluginId": "cordova-plugin-splashscreen",
    "runs": true
  },
  {
    "id": "cordova-plugin-geolocation.GeolocationProxy",
    "file": "plugins/cordova-plugin-geolocation/src/windows/GeolocationProxy.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-geolocation.Coordinates",
    "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "Coordinates"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "PositionError"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.Position",
    "file": "plugins/cordova-plugin-geolocation/www/Position.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "Position"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-console": "1.0.7",
  "cordova-plugin-dialogs": "1.2.1",
  "cordova-plugin-statusbar": "2.1.3",
  "cordova-plugin-vibration": "3.1.0",
  "cordova-plugin-whitelist": "1.2.2",
  "phonegap-plugin-push": "1.8.4",
  "cordova-plugin-file": "6.0.1",
  "cordova-plugin-media-capture": "3.0.2",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-geolocation": "4.0.1"
};
// BOTTOM OF METADATA
});