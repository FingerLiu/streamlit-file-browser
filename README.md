# Streamlit Component Templates

This repo contains templates and example code for creating [Streamlit](https://streamlit.io) Components.

For complete information, please see the [Streamlit Components documentation](https://www.notion.so/streamlit/Components-User-Docs-Public-4cabcc49623e4c8ab71db5a8eb782c3a)!

## Quickstart

* Ensure you have [Python 3.6+](https://www.python.org/downloads/), [Node.js](https://nodejs.org), and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.
* Clone this repo.
* Create a new Python virtual environment for the template:
```
$ cd template
$ python3 -m venv venv  # create venv
$ . venv/bin/activate   # activate venv
$ pip install streamlit # install streamlit
```
* Initialize and run the component template frontend:
```
$ cd template/my_component/frontend
$ npm install    # Install npm dependencies
$ npm run start  # Start the Webpack dev server
```
* From a separate terminal, run the template's Streamlit app:
```
$ cd template
$ . venv/bin/activate  # activate the venv you created earlier
$ streamlit run my_component/__init__.py  # run the example
```
* If all goes well, you should see something like this:
![Quickstart Success](quickstart.png)
* Modify the frontend code at `my_component/frontend/src/MyComponent.tsx`.
* Modify the Python code at `my_component/__init__.py`.

## Examples

See the `template-reactless` directory for a template that does not use [React](https://reactjs.org/).

See the `examples` directory for examples on working with pandas DataFrames, integrating with third-party libraries, and more.

## More Information

* [Streamlit Components documentation](https://www.notion.so/streamlit/Components-User-Docs-Public-4cabcc49623e4c8ab71db5a8eb782c3a)
* [Streamlit Forums](https://discuss.streamlit.io/)
* [Streamlit Components gallery](TODO)