const contentDiv = document.getElementById('content');
const options = document.querySelectorAll('.option');

const optionContents = {
  option1: 
  `<div class="acc-details-1">
  <p>Bank:</p>
  <p>Account Number:</p>
  <p>Account Name:</p>
</div>
<div class="acc-details-2">
 <p>United Bank for Africa (UBA)</p>
  <p>2071034872</p>
  <p>Be Exceptional Teachers Foundation</p>
</div>`,

  option2: 
  `<div class="acc-details-1">
  <p>Bank:</p>
  <p>Account Number:</p>
  <p>Account Name:</p>
</div>
<div class="acc-details-2">
 <p>UK Bank</p>
  <p>2071034872</p>
  <p>Be Exceptional Teachers Foundation</p>
</div>`,

  option3: `
  <div class="acc-details-1">
  <p>Bank:</p>
  <p>Account Number:</p>
  <p>Account Name:</p>
</div>
<div class="acc-details-2">
 <p>US Bank</p>
  <p>2071034872</p>
  <p>Be Exceptional Teachers Foundation</p>
</div>`,
};

function updateContent(optionId){
  contentDiv.innerHTML = optionContents[optionId];
}

options.forEach(option => {
  option.addEventListener('click', () => {
    const optionId = option.getAttribute('id');
    updateContent(optionId);
  });
});

updateContent('option1');