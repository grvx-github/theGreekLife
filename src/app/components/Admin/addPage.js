
"use client";

import { React, useState, useMemo } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import DatePicker from "react-datepicker";
import NumberPicker from "react-widgets/NumberPicker";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-widgets/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/addPage.modules.css";

const addPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [lastDate, setLastDate] = useState(new Date());
  const [day, setDay] = useState({
    dayNum: 0,
    title: "",
    content: "",
  });

  const [dayDataList, setDayDataList] = useState([]);

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    // Extract the content from the editor state
    const contentState = editorState.getCurrentContent();
    const contentText = contentState.getPlainText();

    // Add the current 'day' object to the list
    setDayDataList([...dayDataList, { ...day, content: contentText }]);

    // Clear the 'day' object for the next input
    setDay({
      dayNum: 0,
      title: "",
      content: "",
    });
    setEditorState(EditorState.createEmpty());
  };

  function handleDayChange(value) {
    if (typeof value === "object" && value !== null) {
      // This is an event object
      const { name, value: newValue } = value.target;
      setDay({ ...day, [name]: newValue });
    } else {
      // This is a direct value from the NumberPicker
      setDay({ ...day, dayNum: value });
    }
  }

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleChange = (data) => {
    setEditorState(data);
  };

  const toolbarOptions = ["inline", "fontSize", "image", "emoji"];

  return (
    <div className="main-panel">
      <div className="content-wrapper container-fluid">
        <Row>
          <Col>
            <div className="page-title">
              <div className="float-left">
                <h1>Add page</h1>
              </div>
            </div>
            <div className="row m-0">
              <Col>
                <section className="box">
                  <header className="panel-header"></header>
                  <div className="content-body">
                    <Row>
                      <Col md={10} lg={10} xl={8}>
                        <form>
                          <div class="form-row">
                            <div class="form-group col-md-12">
                              <label for="pageTitle">Page title</label>
                              <input
                                name="pageTitle"
                                type="text"
                                class="form-control"
                                id="page-title"
                                placeholder=""
                              ></input>
                            </div>
                            <div className="d-flex">
                              <div className="form-group col-md-12">
                                <label for="dayNumber">Day Number</label>
                                <NumberPicker
                                  name="dayNumber"
                                  defaultValue={8}
                                  step={1}
                                  value={day.dayNum}
                                  onChange={handleDayChange}
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label for="dayTitle">Day Title</label>
                                <input
                                  name="day-title"
                                  type="text"
                                  class="form-control"
                                  id="dayTitle"
                                  placeholder=""
                                  value={day.newValue}
                                  onChange={handleDayChange}
                                ></input>
                              </div>
                            </div>

                            <div class="form-group col-md-12">
                              <label class="form-label" for="pageEditor">
                                Page Editor
                              </label>
                              <div>
                                <Editor
                                  name="day-content"
                                  editorState={editorState}
                                  onEditorStateChange={handleChange}
                                  wrapperClassName="editor-wrapper"
                                  editorClassName="message-editor"
                                  toolbarClassName="message-toolbar"
                                  toolbar={toolbarOptions}
                                  value={day.content}
                                  onChange={handleDayChange}
                                />
                              </div>
                            </div>
                            <button
                              type="submit"
                              class="btn btn-primary"
                              onClick={handleAddButtonClick}
                            >
                              Add Day
                            </button>

                            {dayDataList.length === 0 ? ( // Check if there's no data
                              <div className="form-group col-md-12 dayData">
                                <div className="d-flex">
                                  <div>
                                    <h4>Day Number</h4>
                                  </div>
                                  <div>
                                    <h4>Day Title</h4>
                                  </div>
                                </div>
                                <div className="dayText">Content goes here</div>
                              </div>
                            ) : (
                              // Render the list of day data
                              dayDataList.map((dayData, index) => (
                                <div
                                  key={index}
                                  className="form-group col-md-12 dayData"
                                >
                                  <div className="d-flex">
                                    <div>
                                      <h4>{dayData.dayNum}</h4>
                                    </div>
                                    <div>
                                      <h4>{dayData.title}</h4>
                                    </div>
                                  </div>
                                  <div className="dayText">
                                    {dayData.content}
                                  </div>
                                </div>
                              ))
                            )}
                            <div class="form-group col-md-12">
                              <label for="exampleText" class="">
                                HTML Format
                              </label>
                              <textarea class="form-control" disabled="">
                                &lt;p&gt;&lt;/p&gt;
                              </textarea>
                            </div>
                            <div class="form-group col-md-12">
                              <label>Date Created</label>
                              <div class="controls">
                                <div>
                                  <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="form-group col-md-12">
                              <label>Date Last Edited</label>
                              <div class="controls">
                                <div>
                                  <DatePicker
                                    selected={lastDate}
                                    onChange={(date) => setLastDate(date)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="form-group col-md-12">
                              <label for="exampleSelect" class="">
                                Page Category
                              </label>
                              <select
                                multiple=""
                                name="select"
                                id="exampleSelect"
                                class="form-control"
                                fdprocessedid="knttgf"
                              >
                                <option>Athens & Islands</option>
                                <option>Classic Tours</option>
                              </select>
                            </div>
                            {/* <div class="form-group col-md-12">
                              <label for="exampleSelect" class="">
                                Page Tags
                              </label>
                              <select
                                multiple=""
                                name="select"
                                id="exampleSelect"
                                class="form-control"
                                fdprocessedid="b61z"
                              >
                                <option>Select</option>
                                <option>Technology</option>
                                <option>Design</option>
                                <option>Logo</option>
                                <option>Brand</option>
                              </select>
                            </div> */}
                            <div class="form-group col-md-12">
                              <label for="exampleSelect" class="">
                                Status
                              </label>
                              <select
                                name="select"
                                id="exampleSelect"
                                class="form-control"
                                fdprocessedid="6zfon7"
                              >
                                <option>Select</option>
                                <option>New</option>
                                <option>Draft</option>
                                <option>Published</option>
                              </select>
                            </div>
                            <div class="form-group col-md-12">
                              <label for="exampleFile" class="">
                                Featured Image
                              </label>
                              <input
                                name="file"
                                id="exampleFile"
                                type="file"
                                class="form-control-file"
                              />
                            </div>
                          </div>
                          <button
                            type="submit"
                            class="btn btn-primary"
                            fdprocessedid="v0fl6g"
                          >
                            Save
                          </button>
                        </form>
                      </Col>
                    </Row>
                  </div>
                </section>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default addPage;
