# vlm-bbox-demo

This is a web app for testing a VLM's ability to return bounding boxes.

# Functional Requirements

## User journey:

Main flow:

```
drag and drop / click to upload multiple PDF / image files in Preview section
                |
                |
display all filenames on the left handside, allow user to select a file by clicking its name
                |
                |
for PDF files, convert them into images in browser when selected, display the pages in the 1 by 1, with a navigator showing current page number and a controller with < and > buttons to go to prev / next page
                |
                |
for images files, just display them in a preview
                |
                |
show the basic metadata about the current image (either converted from PDF page or the original image), like height & width in pixels, size in mb/kb, at the bottom of the Preview section like a status bar
                |
                |
user input a prompt in the 'Prompt' editor and click 'Run' button in the Result section
                |
                |
the selected file is send as image(s) to the backend
                |
                |
the backend api receives the image(s) and send them to the VLM and expect bounding boxes to return
                |
                |
once the VLM responses, draw the bounding boxes with their labels on the image preview
```

Reset flow:

```
user click 'Clear' button
        |
        |
the bounding boxes are removed from current image preview
```

## UI layout

The main page is splited into 2 sections horizontally, with each section taking 50% of the width.

The left hand side is the Preview section and the right hand side is the Result section.

### Preview section

* 20% of the section on the left is for filename list, remaining 80% is the preview area
* allow user to select a file by clicking its name
* allow user to remove a file by clicking X next to its name
* when a PDF is selected, convert them into images in browser, cache the images in local storage so when the user select the file again later, it can load the images from cache directly

### Result section

* it has a 'Prompt' editor which takes the majority of the space, and 'Run' & 'Clear' buttons at the bottom
* the 'Prompt' editor is a markdown editor


