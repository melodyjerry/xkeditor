import Vue from "vue";

const state = Vue.observable({
  showToc: false,
  setting: {
    tinymceSetting: {
      language_url: "/static/tinymce/langs/zh_CN.js",
      language: "zh_CN",
      skin_url: "/static/tinymce/skins/ui/oxide",
      body_class: "markdown-body",
      content_css: "/static/github-markdown.css",
      plugins:
        "print preview fullpage searchreplace autolink directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern",
      toolbar:
        "formatselect | fontsizeselect | bold italic underline strikethrough blockquote forecolor backcolor prismjs | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | tex-$ tex-math flow seq gantt mermaid | removeformat code toMarkdownEditor | undo redo",
      image_advtab: true,
      importcss_append: true,
      height: "100%",
      template_cdate_format: "[CDATE: %m/%d/%Y : %H:%M:%S]",
      template_mdate_format: "[MDATE: %m/%d/%Y : %H:%M:%S]",
      image_caption: true,
      spellchecker_dialog: true,
      spellchecker_whitelist: ["Ephox", "Moxiecode"]
    },
    aceSetting: {
      toolbar:
        "h1 h2 h3 h4 h5 h6 | bold italic underline strikethrough quote mark code | sup sub tex-$ tex-math | flow seq gantt mermaid | ul ol minus table time | link image video graff | toLine search toc typewriter switchPreview fullPreview fullScreen toHtmlEditor toTinyMCE format empty setting | undo redo | setLocalStorage getLocalStorage removeLocalStorage | help info | pasteFormat",
      minLines: 10,
      theme: "ace/theme/solarized_light",
      mode: "ace/mode/markdown",
      tabSize: 4,
      fontSize: "17px",
      wrap: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
      enableBasicAutocompletion: true
    },
    xkSetting: {
      apiBaseUrl: "",
      // 不可即时更新
      previewCss: "/static/github-markdown.css",
      // 不可即时更新
      previewClass: "markdown-body",
      delayToHtml: 500,
      scrollBind: "both",
      imgUpload: false,
      scrollMode: "anchor",
      pasteFormat: true,
      pasteImageUpload: true,
      // 不可即时更新
      enableTinyMCE: true,
      judge0API: "https://run-code.lincdn.top",
      runCodeLangList: {
        c: 1,
        cpp: 2,
        bash: 3,
        csharp: 4,
        go: 5,
        java: 6,
        node: 7,
        php: 8,
        python: 9,
        python2: 10,
        ruby: 11,
        rust: 12,
        scala: 13,
        typescript: 14
      }
    }
  },
  aceEditor: null,
  toolbarShow: true,
  toolbarHtmlShow: true,
  previewShow: "show",
  typewriterMode: false,
  isMarkdownMode: true,
  editorMode: "ace",
  markdownContent: "",
  htmlContent: "",
  htmlViewContent: "",
  graffBoard: {
    content: {},
    hash: false
  },
  toolbarModal: {
    show: false,
    data: {},
    content: ""
  },
  toast: {
    show: false,
    message: "",
    status: "",
    loading: false
  },
  resizor: {
    enable: true,
    left: "",
    right: ""
  }
});

export default state;
