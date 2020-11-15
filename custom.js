const baseObj = {
    petType: '',
    property: '',
    wire: '',
    wirePrice: 0,
    numberOfRecievers: 0,
}
var dataObj = {
    ...baseObj
}

const collorPrices = {
    'standard': 50,
    'mini': 25,
    'premium': 25
}

// const staticImagePath = 'http://abmagroup.co/wp-content/themes/generatepress/images'
const staticImagePath = './images';

const wireDiv = {
    "1": `<div class="col-sm-4">
    <div class="card card-opt m-2" value='300 meter' amount='100'>
        <div class="card-body">
            <h5 class="card-title">For 300 meter</h5>
            <p class="card-text">We recommend ground keeper kit. Price: 100$
            </p>
            <a class="btn btn-primary">Select</a>
        </div>
    </div>
</div>`,
    "2": `<div class="col-sm-4">
    <div class="card card-opt m-2" value='900 meter' amount='150'>
        <div class="card-body">
            <h5 class="card-title">Between 300 to 900 meter</h5>
            <p class="card-text">We recommend DwFM1200D. Price:150$
            </p>
            <a class="btn btn-primary">Select</a>
        </div>
    </div>
</div>`,
    "3": `<div class="col-sm-4">
    <div class="card card-opt m-2" value='900 meter plus' amount='200'>
        <div class="card-body">
            <h5 class="card-title">More than 900 meter</h5>
            <p class="card-text">We recommend DwFM1200D with 24V Power Supply. Price 200$
            </p>
            <a class="btn btn-primary">Select</a>
        </div>
    </div>
</div>`
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
                ${dataObj.petType === 'dog' ? `<div class="col-sm-6">
                <div class="card card-opt" value='standard'>
                    <div class="card-body">
                        <h5 class="card-title">Standard Reciever</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional
                            content.
                        </p>
                        <a class="btn btn-primary">Select</a>
                    </div>
                </div>
            </div>` : ''}
                <div class="col-sm-6">
                    <div class="card card-opt" value='mini'>
                        <div class="card-body">
                            <h5 class="card-title">Mini Reciever</h5>
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
            <div class="row justify-content-md-center mt-4">
                <div class="col justify-content-md-center">
                    Do you want Premium (it will add 25$)?
                    <span><a href="https://www.youtube.com/" target="_blank">Check Video</a></span>
                </div>
                <div class="col" premium-opt-reciever='premium-${itemNumber}'>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id='premium-${itemNumber}-yes' name='premium-${itemNumber}-isPremium' class="custom-control-input" value='premium-${itemNumber}-yes' onclick="recieverPremiumOptClick(${itemNumber}, 'yes')">
                        <label class="custom-control-label" for='premium-${itemNumber}-yes'>Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id='premium-${itemNumber}-no' name='premium-${itemNumber}-isPremium' class="custom-control-input" value='premium-${itemNumber}-no' onclick="recieverPremiumOptClick(${itemNumber}, 'no')">
                        <label class="custom-control-label" for='premium-${itemNumber}-no'>No</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col question-border m-2" id="r${itemNumber}">
        <img src="${staticImagePath}/standard-collor-red.jpg" alt="Girl in a jacket" width="500" height="600">
    </div>
</div>`;
}

function recieverPremiumOptClick(itemNumber, action) {
    if (action === 'yes') {
        dataObj[`r${itemNumber}`][2] = true;
    } else {
        dataObj[`r${itemNumber}`][2] = false;
    }
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
        <span><a href="https://www.youtube.com/" target="_blank"> Check Video</a></span>
    </div>
    <div class="row justify-content-md-center mt-4">
        <div class="col-md-6 mb-3">
            <input type="number" id="property" class="form-control" placeholder="Property in meters">
        </div>
    </div>
    <div class="row justify-content-md-center mt-4 mb-4">
        <a class="btn btn-primary" onclick="onNextProperty()">Next</a>
    </div>
</div>`
}

function q3() {
    return `<div class="question-border mt-4" id='q3'>
    
    <div class="row justify-content-md-center mt-4" id='q3-opts'>
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
            <input type="number" id="recievers" class="form-control" placeholder="Please select from 1 to 10">
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

function createTable() {
    jQuery('#table').remove();
    jQuery('body').append(`<div class='container' id='table'>
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
            const price = collorPrices[dataObj[key][0]];
            jQuery('tbody').append(`<tr>
            <th scope="row">${key[1]}</th>
            <td>Reciever ${dataObj[key][0]}</td>
            <td>${dataObj[key][1]}</td>
            <td>${dataObj[key][2] == true ? `${price + collorPrices.premium}$` : `${price}$`}</td>
          </tr>`)
            if (dataObj[key][2] == true) {
                total = total + price + collorPrices.premium;
            } else {
                total = total + price;
            }
        }
    }
    // --- Wire Amount ----
    jQuery('tbody').append(`<tr>
            <th scope="row">#</th>
            <th>Wire Size</th>
            <td>${dataObj.wire}</td>
            <td>${dataObj.wirePrice}$ </td>
          </tr>`);
    // --- Wire Amount ----
    total = total + dataObj.wirePrice;
    // --- Total Amount ----
    jQuery('tbody').append(`<tr>
            <th scope="row">#</th>
            <th>Total Bill</th>
            <td></td>
            <td>${total}$ </td>
          </tr>`);
    // --- Total Amount ----

    jQuery('#table').append(`<div class="d-flex justify-content-between bd-highlight mt-4 mb-4">
    <button type="button" class="btn btn-outline-success">Add To Cart / Continue</button>
    <button type="button" class="btn btn-outline-info">Go To Cart For Payment</button>
  </div>`);
}

function q5Next() {
    return `
    <div class="row justify-content-md-center mt-4 mb-4">
        <a class="btn btn-primary" onclick="onColorColourNext()">Submit: to see bill</a>
    </div>`
}

const questions = {
    'q1': q1(),
    'q2': q2(),
    'q3': q3(),
    'q4': q4(),
    'q5': q5(),
}

function onColorColourNext() {
    if (jQuery('#q6').length == 0) {
        createTable();
    }
}

function selectRequiredCard(searchString, className, index = 0) {
    jQuery(searchString).each(function () {
        jQuery(this).click(function () {
            jQuery(searchString).removeClass(className);
            jQuery(this).addClass(className);
            if (index === 0) {
                dataObj.wire = jQuery(this).attr('value');
                dataObj.wirePrice = Number(jQuery(this).attr('amount'));
            } else {
                dataObj[`r${index}`][0] = jQuery(this).attr('value');
            }
        })
    });
}

function onNextPetType() {
    const petType = jQuery('[name=isDog]:checked').val();
    if (petType !== undefined) {
        jQuery('#c1').append(questions.q2);
        dataObj.petType = petType;
    } else {
        alert('Please select pet type first');
    }
}

function onNextProperty() {
    // jQuery('#q3').remove();
    const property = $('#property').val();
    if (property.length > 0) {
        if (dataObj.property.length == 0) {
            jQuery('#c1').append(questions.q3);
            const propertyInNumber = Number(property);
            if (propertyInNumber >= 0 && propertyInNumber <= 300) {
                jQuery('#q3-opts').append(wireDiv['1']);
            } else if (propertyInNumber > 300 && propertyInNumber <= 900) {
                jQuery('#q3-opts').append(wireDiv['2']);
            } else {
                jQuery('#q3-opts').append(wireDiv['3']);
            }
            selectRequiredCard('#q3 .card', 'card-opt-select');
        }
        dataObj.property = property;
    } else {
        alert('Please provide some property measures');
    }
}

function onNextWireSelect() {
    if (dataObj.wire.length > 0) {
        if (jQuery('#q4').length === 0) {
            jQuery('#c1').append(questions.q4);
            jQuery('body').append(questions.q5);
        }
    } else {
        alert('Please select wire length first');
    }
}

function attatchRecieverEvents(itemNumber) {
    jQuery(`[target=r${itemNumber}] span`).each(function () {
        jQuery(this).click(function () {
            const color = jQuery(this).attr('value');
            jQuery(`#r${itemNumber} img`).attr('src', `${staticImagePath}/${dataObj[`r${itemNumber}`][0]}-collor-${color}.jpg`)
            dataObj[`r${itemNumber}`][1] = color;
        })
    })
    selectRequiredCard(`#l${itemNumber} .card`, 'card-opt-select', itemNumber);
}

function onRecieverNext() {
    jQuery('#q5').empty();
    var key;
    var total = 0;
    for (key in dataObj) {
        if (key.startsWith('r')) { delete dataObj[key] };
    }
    const numberOfRecievers = Number(jQuery('#recievers').val());
    if (numberOfRecievers <= 0) {
        alert('Please Enter Valid Number of recievers that you want');
    } else {
        if (numberOfRecievers >= 10) {
            alert('Please select recievers between 1 to 10');
            return;
        }
        dataObj.numberOfRecievers = numberOfRecievers;
        for (var i = 1; i <= numberOfRecievers; i++) {
            jQuery('#q5').append(getRecieverDiv(i));
            attatchRecieverEvents(i);
            dataObj[`r${i}`] = ['mini', 'red', false];
        }
        jQuery('#q5').append(q5Next());
    }
}

function resetFrom(startElemId) {
    jQuery('#c1').children().each(function () {
        const id = jQuery(this).attr('id');
        if (id !== startElemId) {
            jQuery(this).remove()
        }
    })
    jQuery('body > div').each(function () {
        const id = jQuery(this).attr('id');
        const removableIds = ['table', 'q5', 'q6'];
        if (removableIds.includes(id)) {
            jQuery(this).remove();
        }
    });
    dataObj = { ...baseObj };
}



jQuery(document).ready(function () {
    jQuery('body').append(`<div class="container" id="c1"></div>`);
    jQuery('#c1').append(questions.q1);
    jQuery('[name=isDog]').change(function () {
        const pet = jQuery('[name=isDog]').val();
        if (dataObj.petType.length > 0) {
            resetFrom('q1');
        }
    })
})