import { Head, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from 'react-i18next';

export default function Welcome({ auth }) {
    const settings = usePage().props.settings;
    const { t } = useTranslation();
    const copyCode = (e) => {
        let button = e.currentTarget;
        let code = button.parentElement.querySelector('code').innerHTML;
        navigator.clipboard.writeText(code).then(function() {
          button.classList.add('copied');
          setTimeout(() => {
            button.classList.remove('copied');
          }, 1000);
        }).catch(function(err) {
          button.classList.add('error');
          setTimeout(() => {
            button.classList.remove('error');
          }, 1000);
          console.error('Panoya kopyalama hatası:', err);
        });
      }

    return (
        <>
            <Head title={t('Home - '+settings.site_name)} />
            <MainLayout auth={auth}>
                <h1 className="hello-world">{t('Hello, World!')}</h1>
                <div className="hello-worlds">

                    <pre className="language-c">
                        <div>C</div>
                        <button className="copy-btn" data-code-target="language-c" onClick={copyCode}><i className="fa-solid fa-copy"></i></button>
                        <code>printf("{t('Hello, World!')}");</code>
                    </pre>

                    <pre className="language-csharp">
                        <div>C#</div>
                        <button className="copy-btn" data-code-target="language-csharp" onClick={copyCode}><i className="fa-solid fa-copy"></i></button>
                        <code>Console.WriteLine("{t('Hello, World!')}");</code>
                    </pre>

                    <pre className="language-cpp">
                        <div>
                            <i className='bx bxl-c-plus-plus'></i> C++
                        </div>
                        <button className="copy-btn" data-code-target="language-cpp" onClick={copyCode}><i className="fa-solid fa-copy"></i></button>
                        <code>std::cout {'<<'} "{t('Hello, World!')}";</code>
                    </pre>

                    <pre className="language-go">
                        <div>
                            <i className="fa-brands fa-golang"></i> Go
                        </div>
                        <button className="copy-btn" data-code-target="language-go" onClick={copyCode}><i className="fa-solid fa-copy"></i></button>
                        <code>fmt.Println("{t('Hello, World!')}")</code>
                    </pre>

                    <pre className="language-java">
                        <div>
                            <i className="fa-brands fa-java"></i> Java
                        </div>
                        <button className="copy-btn" data-code-target="language-java" onClick={copyCode}><i className="fa-solid fa-copy"></i></button>
                        <code>System.out.println("{t('Hello, World!')}");</code>
                    </pre>

                    <pre className="language-javascript">
                        <div>
                            <i className="fa-brands fa-js"></i> Javascript
                        </div>
                        <button className="copy-btn" data-code-target="language-javascript" onClick={copyCode}><i className="fa-solid fa-copy"></i></button>
                        <code>console.log("{t('Hello, World!')}");</code>
                    </pre>

                    <pre className="language-kotlin">
                        <div>
                            Kotlin
                        </div>
                        <button className="copy-btn" data-code-target="language-kotlin" onClick={copyCode}><i className="fa-solid fa-copy"></i></button>
                        <code>println("{t('Hello, World!')}")</code>
                    </pre>

                    <pre className="language-php">
                        <div>
                            <i className="fa-brands fa-php"></i> PHP
                        </div>
                        <button className="copy-btn" data-code-target="language-php" onClick={copyCode}><i className="fa-solid fa-copy"></i></button>
                        <code>echo '{t('Hello, World!')}';</code>
                    </pre>

                    <pre className="language-python">
                        <div>
                            <i className="fa-brands fa-python"></i> Python
                        </div>
                        <button className="copy-btn" data-code-target="language-python" onClick={copyCode}><i className="fa-solid fa-copy"></i></button>
                        <code className="language-python">print("{t('Hello, World!')}")</code>
                    </pre>

                    <pre className="language-ruby">
                        <div>
                            <i className="fa-solid fa-gem"></i> Ruby
                        </div>
                        <button className="copy-btn" data-code-target="language-ruby" onClick={copyCode}><i className="fa-solid fa-copy"></i></button>
                        <code>puts "{t('Hello, World!')}"</code>
                    </pre>

                    <pre className="language-rust">
                        <div>
                            <i className="fa-brands fa-rust"></i> Rust
                        </div>                        
                        <button className="copy-btn" data-code-target="language-rust" onClick={copyCode}><i className="fa-solid fa-copy"></i></button>
                        <code>println!("{t('Hello, World!')}");</code>
                    </pre>

                    <pre className="language-swift">
                        <div>
                            <i className="fa-brands fa-swift"></i> Swift
                        </div>
                        <button className="copy-btn" data-code-target="language-swift" onClick={copyCode}><i className="fa-solid fa-copy"></i></button>
                        <code>print("{t('Hello, World!')}")</code>
                    </pre>
                </div>

            </MainLayout>
        </>
    );
}
