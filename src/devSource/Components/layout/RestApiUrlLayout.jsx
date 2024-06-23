import stylesRest from "../../styleModule/restAPIBuilder.module.css";

export default function RestApiUrlLayout({isExpanded=true , localPort , endpoint}) {
    let url = localPort + endpoint
    const handleCopyClick = (url) => {
        if (navigator.clipboard !== undefined) {
            navigator.clipboard
                .writeText(url)
                .then(() => {
                    alert('URL 을 복사하였습니다.');
                });
        } else {
            // execCommand 사용
            const textArea = document.createElement('textarea');
            textArea.value = `${url}`;
            document.body.appendChild(textArea);
            textArea.select();
            textArea.setSelectionRange(0, 99999);
            try {
                document.execCommand('copy');
            } catch (err) {
                console.error('복사 실패', err);
            }
            textArea.setSelectionRange(0, 0);
            document.body.removeChild(textArea);
        }
    };

    return (
        <div>
            <div className={`${stylesRest.urlContainer} ${isExpanded ? stylesRest.visible : ''}`}>
                <div>
                    {/* GET 메서드 */}
                    {isExpanded && (
                        <div>
                            <button className={stylesRest.copyButton} onClick={() => handleCopyClick(url)}>Copy</button>
                            <h5> Get URL</h5>
                            <p>
                                {url}
                            </p>
                            <hr/>

                        </div>

                    )}
                </div>
                {/* POST 메서드 */}
                <div>
                    {isExpanded && (
                        <div>
                            <button className={stylesRest.copyButton} onClick={() => handleCopyClick(url)}>Copy</button>
                            <h5>Post URL</h5>
                                <p>
                                    {url}
                                </p>
                            <hr/>
                        </div>
                    )}
                </div>
                <div>
                    {isExpanded && (
                        <div>
                            <button className={stylesRest.copyButton} onClick={() => handleCopyClick(url)}>Copy</button>
                            <h5>UPDATE URL</h5>
                            <p>
                                {url}/<strong style={{color : '#00A3FF'}}>[PK]</strong>
                            </p>
                            <hr/>
                        </div>
                    )}
                </div>
                <div>
                    {isExpanded && (
                        <div>
                            <button className={stylesRest.copyButton} onClick={() => handleCopyClick(url)}>Copy</button>
                            <h5>DELETE URL</h5>
                            <p>
                                {url}/<strong style={{color : '#00A3FF'}}>[PK]</strong>
                            </p>
                            <hr/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
