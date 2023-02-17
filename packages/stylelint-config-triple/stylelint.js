/** @type {import('stylelint').Config} */
module.exports = {
  // recommended에는 에러를 막을 수 있는 규칙이 정의되어 있습니다.
  extends: ['stylelint-config-recommended'],
  rules: {
    // length
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],

    // case
    'function-name-case': 'lower',
    'selector-type-case': 'lower',
    'value-keyword-case': 'lower',

    // empty-line-before
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],

    // notation
    'color-hex-length': 'short',
    'import-notation': 'url',
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    'selector-pseudo-element-colon-notation': 'double',

    // quotes
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',

    // no-redundant
    'declaration-block-no-redundant-longhand-properties': true,
    'shorthand-property-no-redundant-values': true,

    // white-inside
    'comment-whitespace-inside': 'always',
  },
  overrides: [
    {
      files: ['**/*.{js,ts,tsx}'],
      customSyntax: require('postcss-styled-syntax'),
      rules: {
        // postcss-styled-syntax와 같이 사용하면 아직 버그가 있어서 일부 `no-empty`, `case`, 'no-unknown' 규칙을 끕니다.
        'block-no-empty': null,
        'no-empty-source': null,

        'function-name-case': null,
        'value-keyword-case': null,

        'annotation-no-unknown': null,
        'function-no-unknown': null,
      },
    },
  ],
}
