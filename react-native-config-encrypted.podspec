require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name            = package['name']
  s.version         = package['version']
  s.summary         = package['description']
  s.description     = package['description']
  s.license         = package['license']
  s.author          = package['author']
  s.homepage        = package['homepage']
  s.source          = { :git => "https://github.com/Cattari/react-native-config-encrypted.git", :tag => "v#{s.version}" }

  s.platform        = :ios, '10.3'
  s.swift_version   = '5.0'

  s.preserve_paths  = 'LICENSE', 'README.md'
  s.source_files    = "ios/**/*.{h,m,swift}"

  s.dependency 'React'
  s.dependency 'AESCrypt-ObjC','~> 1.0.2'
end
  