import React from "react"
import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
  ComponentProps,
} from "streamlit-component-lib"
import FileBrowser, { Icons, FileBrowserFile, FileBrowserFolder } from 'react-keyed-file-browser'
import 'react-keyed-file-browser/dist/react-keyed-file-browser.css';
import 'font-awesome/css/font-awesome.min.css';

interface File {
  name: string;
  absolute_path: string;
  relative_path: string;
  is_dir: string;
  size: number;
  create_time: number;
  update_time: number;
  access_time: number;
  children: File[];
}

interface State {
  numClicks: number
  isFocused: boolean
}

interface IArgs {
  files: File[]
}

const getTimeDiff = (time: number) => (+new Date() - time);

class FileBrowserWrapper extends StreamlitComponentBase<State> {
  private args: IArgs

  constructor(props: ComponentProps) {
    super(props)
    this.args = props.args
  }

  ajustHeight(revoke_step?: number) {
    const root = document.getElementById('root');
    if (root) {
      const height = Math.min(root.clientHeight, root.scrollHeight, root.offsetHeight);
      Streamlit.setFrameHeight(height - (revoke_step ? revoke_step : 0));
      setTimeout(Streamlit.setFrameHeight, 1);
    }
  }

  componentDidMount() {
    this.ajustHeight();
  }

  componentDidUpdate() {
    this.ajustHeight();
  }

  folderOpenHandler = (opts: FileBrowserFolder) => this.ajustHeight();
  folderCloseHandler = (opts: FileBrowserFolder) => this.ajustHeight();

  fileSelectedHandler = (opts: FileBrowserFile) => {
    const file = this.args.files.find(file => file.relative_path === opts.key)
    Streamlit.setComponentValue(file)
  }

  convertFiles = (files: File[]): FileBrowserFile[] => (
    files.map(file => (
      {
        key: file.relative_path,
        modified: getTimeDiff(file.update_time),
        size: file.size,
      }
    ))
  )

  noop = () => <></>
  public render = () => {
    return (
      <div>
        <FileBrowser
          {...this.args}
          canFilter={false}
          detailRenderer={this.noop}
          icons={Icons.FontAwesome(4)}
          files={this.convertFiles(this.args.files)}
          onFolderOpen={this.folderOpenHandler}
          onFolderClose={this.folderCloseHandler}
          onSelectFile={this.fileSelectedHandler}
        />
      </div>
    )
  }
}

export default withStreamlitConnection(FileBrowserWrapper)