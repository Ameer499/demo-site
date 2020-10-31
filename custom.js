var dataObj = {
    petType: '',
    property: '',
    wire: '',
    numberOfRecievers: 0,
    isPremium: false,
}
function getRecieverDiv(itemNumber) {
    return `<div class="row justify-content-md-center mt-4 mb-4">
    <div class="col question-border m-2">
        <div class="container m-1">
            <div class="row justify-content-md-center mt-4">
                <div>
                    <h5 class="card-title">Reciever ${itemNumber}</h5>
                </div>
            </div>
            <div class="row justify-content-md-center mt-4" id='l${itemNumber}'>
                <div class="col-sm-6">
                    <div class="card card-opt" value='large'>
                        <div class="card-body">
                            <h5 class="card-title">Large Reciever</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional
                                content.
                            </p>
                            <a class="btn btn-primary">Select</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card card-opt" value='midium'>
                        <div class="card-body">
                            <h5 class="card-title">Midium Reciever</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional
                                content.
                            </p>
                            <a class="btn btn-primary">Select</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center mt-4">
                <div class="col" target='r${itemNumber}'>
                    <span class="color-picker red m-2" value="red"></span>
                    <span class="color-picker mango m-2" value="mango"></span>
                    <span class="color-picker black m-2" value="black"></span>
                    <span class="color-picker blue m-2" value="blue"></span>
                    <span class="color-picker pink m-2" value="pink"></span>
                    <span class="color-picker purple m-2" value="purple"></span>
                </div>
            </div>
        </div>
    </div>
    <div class="col question-border m-2" id="r${itemNumber}">
        <img src="./images/collor-red.jpg" alt="Girl in a jacket" width="500" height="600">
    </div>
</div>`;
}


function q1() {
    return `<div class="question-border mt-4" id='q1'>
    <div class="row justify-content-md-center mt-4">
        I have a cat or a dog?
    </div>
    <div class="row justify-content-md-center mt-4">
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="dog" name="isDog" class="custom-control-input" value='dog'>
            <label class="custom-control-label" for="dog">Dog</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="cat" name="isDog" class="custom-control-input" value='cat'>
            <label class="custom-control-label" for="cat">Cat</label>
        </div>
    </div>
    <div class="row justify-content-md-center mt-4 mb-4">
        <a class="btn btn-primary" onclick="onNextPetType()">Next</a>
    </div>
</div>`
}

function q2() {
    return `<div class="question-border mt-4" id='q2'>
    <div class="row justify-content-md-center mt-4">
        How big is your property ?
    </div>
    <div class="row justify-content-md-center mt-4">
        <div class="col-md-6 mb-3">
            <input type="text" id="property" class="form-control" placeholder="Property in Yards">
        </div>
    </div>
    <div class="row justify-content-md-center mt-4 mb-4">
        <a class="btn btn-primary" onclick="onNextProperty()">Next</a>
    </div>
</div>`
}

function q3() {
    return `<div class="question-border mt-4" id='q3'>
    <div class="row justify-content-md-center mt-4">
        How much wire do you want ?
    </div>
    <div class="row justify-content-md-center mt-4">
        <div class="col-sm-4">
            <div class="card card-opt m-2" value='300 feet'>
                <div class="card-body">
                    <h5 class="card-title">300 feet</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.
                    </p>
                    <a class="btn btn-primary">Select</a>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card card-opt m-2" value='900 feet'>
                <div class="card-body">
                    <h5 class="card-title">Less than 900 feet</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.
                    </p>
                    <a class="btn btn-primary">Select</a>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card card-opt m-2" value='900 feet plus'>
                <div class="card-body">
                    <h5 class="card-title">More than 900 feet</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.
                    </p>
                    <a class="btn btn-primary">Select</a>
                </div>
            </div>
        </div>
    </div>
    <div class="row justify-content-md-center mt-4 mb-4">
        <a class="btn btn-primary" onclick="onNextWireSelect()">Next</a>
    </div>
</div>`
}

function q4() {
    return `<div class="question-border mt-4" id='q4'>
    <div class="row justify-content-md-center mt-4">
        How many recievers do you want ?
    </div>
    <div class="row justify-content-md-center mt-4">
        <div class="col-md-6 mb-3">
            <input type="number" id="recievers" class="form-control" placeholder="Number of recievers">
        </div>
        <div>
            <a class="btn btn-primary" onclick="onRecieverNext()">Next</a>
        </div>
    </div>
</div>`
}

function q5() {
    return `<div class="container question-border mt-4 mb-4" id='q5'>
    </div>`;
}

function q6() {
    return ` <div class="container question-border mt-4 mb-4" id='q6'>
    <div class="row justify-content-md-center mt-4">
        Do you want to upgrade to Premium?
    </div>
    <div class="row justify-content-md-center mt-4">
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="yes" name="isPremium" class="custom-control-input" value='yes'>
            <label class="custom-control-label" for="yes">Yes</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="no" name="isPremium" class="custom-control-input" value='no'>
            <label class="custom-control-label" for="no">No</label>
        </div>
    </div>
    <div class="row justify-content-md-center mt-4 mb-4">
        <a class="btn btn-primary" onclick="onNextPremium()">Next</a>
    </div>
</div>`
}

function createTable() {
    $('body').append(`<div class='container' id='table'>
    <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Reciever Size</th>
            <th scope="col">Reciever Color</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
  </div>`)
    var key;
    var total = 0;
    for (key in dataObj) {
        if (key.startsWith('r')) {
            $('tbody').append(`<tr>
            <th scope="row">${key[1]}</th>
            <td>Reciever ${dataObj[key][0]}</td>
            <td>${dataObj[key][1]}</td>
            <td>${dataObj.isPremium == 'yes' ? '35$' : '10$'}</td>
          </tr>`)
          if (dataObj.isPremium == 'yes') {
              total=total+35;
          } else {
              total=total+10;
          }
        }
    }
}

function q5Next() {
    return `
    <div class="row justify-content-md-center mt-4 mb-4">
        <a class="btn btn-primary" onclick="onColorColourNext()">Next</a>
    </div>`
}

const questions = {
    'q1': q1(),
    'q2': q2(),
    'q3': q3(),
    'q4': q4(),
    'q5': q5(),
    'q6': q6(),
}

function onNextPremium() {
    const isPremium = $('[name=isPremium]:checked').val();
    if (isPremium !== undefined) {
        dataObj.isPremium = isPremium;
        // alert(JSON.stringify(dataObj));
        createTable();
    } else {
        alert('Please select Type for premium');
    }
}

function onColorColourNext() {
    $('body').append(questions.q6);
}

function selectRequiredCard(searchString, className, index = 0) {
    $(searchString).each(function () {
        $(this).click(function () {
            $(searchString).removeClass(className);
            $(this).addClass(className);
            if (index === 0) {
                dataObj.wire = $(this).attr('value');
            } else {
                dataObj[`r${index}`][0] = $(this).attr('value');
            }
        })
    });
}

function onNextPetType() {
    const petType = $('[name=isDog]:checked').val();
    if (petType !== undefined) {
        $('.container').append(questions.q2);
        dataObj.petType = petType;
    } else {
        alert('Please select pet type first');
    }
}

function onNextProperty() {
    const property = $('#property').val();
    if (property.length > 0) {
        $('.container').append(questions.q3);
        selectRequiredCard('#q3 .card', 'card-opt-select');
        dataObj.property = property;
    } else {
        alert('Please provide some property measures');
    }
}

function onNextWireSelect() {
    if (dataObj.wire.length > 0) {
        $('.container').append(questions.q4);
        $('body').append(questions.q5);
    } else {
        alert('Please select wire length first');
    }

}

function attatchRecieverEvents(itemNumber) {
    $(`[target=r${itemNumber}] span`).each(function () {
        $(this).click(function () {
            const color = $(this).attr('value');
            $(`#r${itemNumber} img`).attr('src', `./images/collor-${color}.jpg`)
            dataObj[`r${itemNumber}`][1] = color;
        })
    })
    selectRequiredCard(`#l${itemNumber} .card`, 'card-opt-select', itemNumber);
}

function onRecieverNext() {
    $('#q5').empty();
    const numberOfRecievers = Number($('#recievers').val());
    if (numberOfRecievers == 0) {
        alert('Please Enter Number of recievers that you want');
    } else {
        dataObj.numberOfRecievers = numberOfRecievers;
        for (var i = 1; i <= numberOfRecievers; i++) {
            $('#q5').append(getRecieverDiv(i));
            attatchRecieverEvents(i);
            dataObj[`r${i}`] = ['medium', 'red'];
        }
        $('#q5').append(q5Next());
    }
}



$(document).ready(function () {
    $('.container').append(questions.q1);
})