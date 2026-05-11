import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { 
  Bold, Italic, List, ListOrdered, Quote, Undo, Redo, Heading1, Heading2, Save
} from 'lucide-react';

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<h1>Start writing your ARPG guide...</h1>',
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none min-h-[400px] p-4 text-zinc-100',
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-zinc-900/50 border-b border-zinc-800">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive('bold') ? 'text-vibe-gold bg-zinc-800' : 'text-zinc-400'}`}
          title="Bold"
        >
          <Bold size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive('italic') ? 'text-vibe-gold bg-zinc-800' : 'text-zinc-400'}`}
          title="Italic"
        >
          <Italic size={18} />
        </button>
        <div className="w-px h-6 bg-zinc-800 mx-1" />
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive('heading', { level: 1 }) ? 'text-vibe-gold bg-zinc-800' : 'text-zinc-400'}`}
          title="H1"
        >
          <Heading1 size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive('heading', { level: 2 }) ? 'text-vibe-gold bg-zinc-800' : 'text-zinc-400'}`}
          title="H2"
        >
          <Heading2 size={18} />
        </button>
        <div className="w-px h-6 bg-zinc-800 mx-1" />
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive('bulletList') ? 'text-vibe-gold bg-zinc-800' : 'text-zinc-400'}`}
          title="Bullet List"
        >
          <List size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive('orderedList') ? 'text-vibe-gold bg-zinc-800' : 'text-zinc-400'}`}
          title="Ordered List"
        >
          <ListOrdered size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive('blockquote') ? 'text-vibe-gold bg-zinc-800' : 'text-zinc-400'}`}
          title="Quote"
        >
          <Quote size={18} />
        </button>
        <div className="w-px h-6 bg-zinc-800 mx-1 flex-grow" />
        <button
          onClick={() => editor.chain().focus().undo().run()}
          className="p-2 rounded hover:bg-zinc-800 text-zinc-400"
          title="Undo"
        >
          <Undo size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          className="p-2 rounded hover:bg-zinc-800 text-zinc-400"
          title="Redo"
        >
          <Redo size={18} />
        </button>
      </div>

      {/* Editor Content */}
      <div className="relative">
        <EditorContent editor={editor} />
      </div>

      {/* Footer / Actions */}
      <div className="p-4 bg-zinc-900/50 border-t border-zinc-800 flex justify-between items-center">
        <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">VibeGaming Editor v1.0</span>
        <button 
          className="flex items-center gap-2 bg-[#e3b341] hover:bg-[#c99d35] text-zinc-950 px-6 py-2 rounded-lg font-bold transition-all shadow-lg hover:shadow-[#e3b341]/20"
          onClick={() => console.log(editor.getHTML())}
        >
          <Save size={18} />
          Publish Post
        </button>
      </div>

      <style jsx global>{`
        .ProseMirror h1 { font-size: 2.25rem; font-weight: 800; color: #e3b341; margin-bottom: 1.5rem; }
        .ProseMirror h2 { font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 2rem; margin-bottom: 1rem; }
        .ProseMirror p { margin-bottom: 1rem; line-height: 1.6; }
        .ProseMirror ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem; }
        .ProseMirror ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1rem; }
        .ProseMirror blockquote { border-left: 4px solid #e3b341; padding-left: 1rem; font-style: italic; color: #a1a1aa; margin: 1.5rem 0; }
        :root { --vibe-gold: #e3b341; }
      `}</style>
    </div>
  );
};

export default Editor;
