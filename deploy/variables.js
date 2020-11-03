io.rel('config.js');

let nameDir = 'akumo-mac53';
let jlinkCommand = [config.akumoMac.jlink, '--module-path', './lib', '--add-modules', 'com.akumo', '--output', nameDir];
let dist = config.akumoMac.tool + System.separator() + nameDir;
let bin = dist + System.separator() + 'bin';
let lib = dist + System.separator() + 'lib';
let src = config.akumoMac.js + System.separator() + 'src';
let ext = dist + System.separator() + 'ext';
let target = config.akumoMac.commons + System.separator() + 'target';
let akumoExe = config.akumoMac.src + System.separator() + 'akumoExe';

let toolLib = config.akumoMac.tool + System.separator() + 'lib';
let compilerArtifact = config.akumoMac.src + System.separator() + 'target' + System.separator() + 'compiler-1.0-SNAPSHOT.jar';
