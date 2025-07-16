import type { Selection } from '$lib/models/selection';

import logoC from '$lib/images/c.png';
import logoCpp from '$lib/images/cpp.png';
import logoJava from '$lib/images/java.png';
import logoJavaScript from '$lib/images/javascript.png';
import logoPython from '$lib/images/python.png';
import logoTypeScript from '$lib/images/typescript.png';
import logoKotlin from '$lib/images/kotlin.png';
import logoSwift from '$lib/images/swift.png';
import logoRust from '$lib/images/rust.png';
import logoGo from '$lib/images/go.png';
import logoDart from '$lib/images/dart.png';
import logoPhp from '$lib/images/php.png';
import logoRuby from '$lib/images/ruby.png';
import logoPerl from '$lib/images/perl.png';
import logoHaskell from '$lib/images/haskell.png';
import logoScala from '$lib/images/scala.png';

class SelectionsRegistryCommons { 
  public static readonly DEFAULT: Selection = {
    id: 'default',
    name: '(undefined)',
    description: '(undefined)',
    imagePath: ''
  };
}

class SelectionsRegistryProgrammingLanguages {
  /*
   * 데이터 정의
   */
  public static readonly C: Selection = {
    id: 'c',
    name: 'C',
    imagePath: logoC
  };

  public static readonly CPP: Selection = {
    id: 'cpp',
    name: 'C++',
    imagePath: logoCpp
  };

  public static readonly JAVA: Selection = {
    id: 'java',
    name: 'Java',
    imagePath: logoJava
  };

  public static readonly JAVASCRIPT: Selection = {
    id: 'javascript',
    name: 'JavaScript',
    imagePath: logoJavaScript
  };

  public static readonly PYTHON: Selection = {
    id: 'python',
    name: 'Python',
    imagePath: logoPython
  };

  public static readonly TYPESCRIPT: Selection = {
    id: 'typescript',
    name: 'TypeScript',
    imagePath: logoTypeScript
  };

  public static readonly KOTLIN: Selection = {
    id: 'kotlin',
    name: 'Kotlin',
    imagePath: logoKotlin
  };

  public static readonly SWIFT: Selection = {
    id: 'swift',
    name: 'Swift',
    imagePath: logoSwift
  };

  public static readonly RUST: Selection = {
    id: 'rust',
    name: 'Rust',
    imagePath: logoRust
  };

  public static readonly GO: Selection = {
    id: 'go',
    name: 'Go',
    imagePath: logoGo
  };

  public static readonly DART: Selection = {
    id: 'dart',
    name: 'Dart',
    imagePath: logoDart
  };

  public static readonly PHP: Selection = {
    id: 'php',
    name: 'PHP',
    imagePath: logoPhp
  };

  public static readonly RUBY: Selection = {
    id: 'ruby',
    name: 'Ruby',
    imagePath: logoRuby
  };

  public static readonly PERL: Selection = {
    id: 'perl',
    name: 'Perl',
    imagePath: logoPerl
  };

  public static readonly HASKELL: Selection = {
    id: 'haskell',
    name: 'Haskell',
    imagePath: logoHaskell
  };

  public static readonly SCALA: Selection = {
    id: 'scala',
    name: 'Scala',
    imagePath: logoScala
  };

  /*
   * 정의한 데이터를 일괄적으로 불러올 수 있도록 레지스트리 제공
   */
  public static readonly registered: Selection[] = [
    SelectionsRegistryProgrammingLanguages.C,
    SelectionsRegistryProgrammingLanguages.CPP,
    SelectionsRegistryProgrammingLanguages.JAVA,
    SelectionsRegistryProgrammingLanguages.JAVASCRIPT,
    SelectionsRegistryProgrammingLanguages.PYTHON,
    SelectionsRegistryProgrammingLanguages.TYPESCRIPT,
    SelectionsRegistryProgrammingLanguages.KOTLIN,
    SelectionsRegistryProgrammingLanguages.SWIFT,
    SelectionsRegistryProgrammingLanguages.RUST,
    SelectionsRegistryProgrammingLanguages.GO,
    SelectionsRegistryProgrammingLanguages.DART,
    SelectionsRegistryProgrammingLanguages.PHP,
    SelectionsRegistryProgrammingLanguages.RUBY,
    SelectionsRegistryProgrammingLanguages.PERL,
    SelectionsRegistryProgrammingLanguages.HASKELL,
    SelectionsRegistryProgrammingLanguages.SCALA
  ];

  private static readonly _registeredMap: Map<string, Selection> = new Map(
    SelectionsRegistryProgrammingLanguages.registered.map(sel => [sel.id, sel])
  );

  public static getSelectionById(id: string): Selection {
    const selection = SelectionsRegistryProgrammingLanguages._registeredMap.get(id);
    if (!selection) {
      return SelectionsRegistryCommons.DEFAULT;
    }
    return selection;
  }
}

export { SelectionsRegistryCommons, SelectionsRegistryProgrammingLanguages };
