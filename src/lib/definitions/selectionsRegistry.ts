import type { Selection } from '$lib/models/selection';

/**
 * SvelteKit에서는 이미지 파일과 웹 사이트 상에서의 이미지 경로를 자동으로 관리할 수 있음.
 * 구체적인 사용 방법은 아래의 코드와 주소 상의 문서를 참조할 것:
 * 
 * https://svelte.dev/docs/kit/images
 * https://vite.dev/guide/assets.html
 */
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

/**
 * SelectionsRegistry는 월드컵 게임에서 사용되는 선택 항목들을 Selection 타입에 맞게 정의함.
 * 
 * 이와 같이 타입스크립트 코드로 정의하거나, JSON, CSV 등의 데이터 파일로도 정의할 수 있음.
 * 
 * 월드컵 게임의 경우, 원본 게임에서는 사용자들이 <과자 월드컵>, <배우 월드컵>과 같이 다양한 주제로
 * 게임을 생성할 수 있으므로 데이터 파일로 정의하는 것이 더 유용함.
 * (이와 같이 데이터를 코드 상에 추가하면 웹사이트 사용자가 코드를 직접 수정할 수 없기 때문)
 * 
 * 일반적으로 데이터를 이와 같이 코드 상에 추가하는 것은 게임 아이템과 같이 사용자의 개입으로 데이터가
 * 추가되지 않을 대상에만 사용하는 것이 일반적임.
 * 
 * 이번 예제에서는 타입스크립트 상에서의 사용법을 이해할 수 있도록 예외적으로 타입스크립트 코드로 정의함.
 */

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
