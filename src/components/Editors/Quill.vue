<template>
  <quill-editor
    v-model="content"
    ref="myQuillEditor"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
  ></quill-editor>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  components: {
    quillEditor
  },
  data: () => ({
    content: "<h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>",
    editorOption: {
      // some quill options
    }
  }),
  methods: {
    onEditorBlur(quill) {
      window.console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      window.console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      window.console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      window.console.log(text);
      window.console.log(quill)
      this.content = html;
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
};
</script>