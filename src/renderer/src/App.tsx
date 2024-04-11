import Versions from './components/Versions';
import electronLogo from './assets/electron.svg';
import { useState } from 'react';

function App(): JSX.Element {
  const [scriptResult, setScriptResult] = useState<string>('');
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  const executePythonScript = (): void => {
    window.electron.ipcRenderer.send('python-script-create');
  };

  window.electron.ipcRenderer.on('python-script-finish', (_, result) => {
    if (result.success) {
      setScriptResult('Script Python executado com sucesso!');
    } else {
      setScriptResult(`Erro ao executar o script Python: ${result.error}`);
    }
  });

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>

      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>

      <button className="btn_main" onClick={executePythonScript}>
        Python Script!
      </button>
      <div>{scriptResult}</div>
      <Versions></Versions>
    </>
  );
}

export default App;
