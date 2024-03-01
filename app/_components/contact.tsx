export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center">Contact</h2>
      <h3 className="text-2xl font-bold text-center">メールフォーム</h3>
      <form action="https://formspree.io/f/moqyqzqz" method="POST" className="flex justify-center space-x-4 mt-4">
        <input type="text" name="name" placeholder="お名前" className="p-2" />
        <input type="email" name="_replyto" placeholder="メールアドレス" className="p-2" />
        <textarea name="message" placeholder="メッセージ" className="p-2" />
        <button type="submit" className="p-2 bg-blue-500 hover:bg-blue-700 text-white">送信</button>
      </form>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://twitter.com/daikiojm" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Twitter</a>
        <a href="https://linkedin.com/in/daikiojm" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
      </div>
    </section>
  );
}
