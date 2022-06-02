import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from '@/App';
import '@/styles/index.less';
import '@/utils/bus';

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);
