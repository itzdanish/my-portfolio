"use client";

import Script from "next/script";

export default function AmazonConnectChat() {
  return (
    <Script id="amazon-connect-chat" strategy="afterInteractive">
      {`
        (function(w, d, x, id) {
          var s = d.createElement('script');
          s.src = 'https://readtheprojectmanual.my.connect.aws/connectwidget/static/amazon-connect-chat-interface-client.js';
          s.async = 1;
          s.id = id;
          d.getElementsByTagName('head')[0].appendChild(s);

          w[x] = w[x] || function() {
            (w[x].ac = w[x].ac || []).push(arguments);
          };
        })(window, document, 'amazon_connect', 'b9041f6c-ca79-43d6-b072-5ffe49770dd2');

        amazon_connect('styles', {
          iconType: 'CHAT',
          openChat: {
            color: '#ffffff',
            backgroundColor: '#1c78d4'
          },
          closeChat: {
            color: '#ffffff',
            backgroundColor: '#1c78d4'
          }
        });

        amazon_connect('snippetId', 'QVFJREFIZ1NqZWV5MTExbXUwZXRHZUlvQ2NPT3RQZ1k4bTl0VDhTaTZYcy9YcFVCVHdHVm93VUkyMTJRVkNYbWdkMXVkaXozQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNY3ZQYXVoQ01TbC9EMDBtb0FnRVFnQ3RDT0U0NGI0YjRBTVlJMFZVREtxOHI1VTN1NXhIblRwb1JvL0QvU0RONzZITU1oT2RsaGg0V2JVUkk6OkdMcS9zUERjaUdzTDdpSVBEREhqZEdDV2tRVU1SZjhkVEM5QkpvNGFpYzlhaHBtWDFLTE5IR2hKVlRBMmRkbzBFaHpTZklQenBnaC8vb2Z5UVhDZTVUWTB1T2VJRSsybDRoaWNYMzVmaWtDTDhJVGhtd1ltY2xwVlgxaUVPOVRVbFVhVzJ1cHF1aXllVXY3d0l0TWtyVjlLMWNTUVNxTT0=');

        amazon_connect('supportedMessagingContentTypes', [
          'text/plain',
          'text/markdown',
          'application/vnd.amazonaws.connect.message.interactive',
          'application/vnd.amazonaws.connect.message.interactive.response'
        ]);
      `}
    </Script>
  );
}