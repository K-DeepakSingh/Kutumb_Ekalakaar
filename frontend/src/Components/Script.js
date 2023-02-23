<div>
  // upload opportubity script
  import $ from 'jquery';
  function validateUploadOpportunity() {'{'}
  var valid = true;
  if (document.getElementById("position").value == "") {'{'}
  document.getElementById("position").classList.add("notvalid")
  return false;
  {'}'} else {'{'}
  document.getElementById("position").classList.remove("notvalid")
  {'}'}
  if (document.getElementById("aboutCompany").value == "") {'{'}
  document.getElementById("aboutCompany").classList.add("notvalid")
  return false;
  {'}'} else {'{'}
  document.getElementById("aboutCompany").classList.remove("notvalid")
  {'}'}
  if (document.getElementById("requirements").value == "") {'{'}
  document.getElementById("requirements").classList.add("notvalid")
  return false;
  {'}'} else {'{'}
  document.getElementById("requirements").classList.remove("notvalid")
  {'}'}
  if (document.getElementById("duration").value == "" || isNaN(document.getElementById("duration").value)) {'{'}
  document.getElementById("duration").classList.add("notvalid")
  return false;
  {'}'} else {'{'}
  document.getElementById("duration").classList.remove("notvalid")
  {'}'}
  if (document.getElementById("number").value == "" || isNaN(document.getElementById("number").value)) {'{'}
  document.getElementById("number").classList.add("notvalid")
  return false;
  {'}'} else {'{'}
  document.getElementById("number").classList.remove("notvalid")
  {'}'}
  if (document.getElementById("link-to-document").value == "") {'{'}
  document.getElementById("link-to-document").classList.add("notvalid")
  return false;
  {'}'} else {'{'}
  document.getElementById("link-to-document").classList.remove("notvalid")
  {'}'}
  return true;
  {'}'}
  // Rate Preciously hired artist script
  var ratingNumber = 'hired-artist-rating-number',
  ratingNum = $('<div id="' + ratingNumber + '" />');
  $('.rate-previously-hired-artist-body-artist-rating-number').append(ratingNum);
  $('[type*="radio"]').change(function () {'{'}
  var me = $(this);
  ratingNum.html(me.attr('value') + ' Stars');
  {'}'});
  function validateRatePreviouslyHiredArtist() {'{'}
  var valid = true;
  if (document.getElementById("feedback").value == "") {'{'}
  document.getElementById("feedback").classList.add("notvalid")
  return false;
  {'}'} else {'{'}
  document.getElementById("feedback").classList.remove("notvalid")
  {'}'}
  return true;
  {'}'}
  // 
  // Rate Patron Script
  var ratingNumber = 'hired-artist-rating-number',
  ratingNum = $('<div id="' + ratingNumber + '" />');
  $('.rate-patron-body-patron-rating-number').append(ratingNum);
  $('[type*="radio"]').change(function () {'{'}
  var me = $(this);
  ratingNum.html(me.attr('value') + ' Stars');
  {'}'});
  function validateRatePatron() {'{'}
  var valid = true;
  if (document.getElementById("feedback").value == "") {'{'}
  document.getElementById("feedback").classList.add("notvalid")
  return false;
  {'}'} else {'{'}
  document.getElementById("feedback").classList.remove("notvalid")
  {'}'}
  return true;
  {'}'}
  //shortlisted artist view script
  function clearForm() {'{'}
  document.getElementById("filter-form").reset();{'}'}
  <div>
    jQuery(document).ready(function ($) {'{'}'{'{'}'{'}'}
    var alterClass = function () {'{'}'{'{'}'{'}'}
    var patronSearchArtistWW = document.body.clientWidth;
    if (patronSearchArtistWW &lt; 556) {'{'}'{'{'}'{'}'}
    $('#patron-view-artist-filter-LocationInputLabel').removeClass('col-2');
    $('#patron-view-artist-filter-LocationInputLabel').addClass('col-3');
    $('#patron-view-artist-filter-inputBoxLocation').removeClass('col-4');
    $('#patron-view-artist-filter-inputBoxLocation').addClass('col-6');
    $('#patron-view-artist-filter-ArtInputLabelSelect').removeClass('col-2');
    $('#patron-view-artist-filter-ArtInputLabelSelect').addClass('col-3');
    $('#patron-view-artist-filter-LanguageInputLabelSelect').removeClass('col-2');
    $('#patron-view-artist-filter-LanguageInputLabelSelect').addClass('col-3');
    $('#patron-view-artist-filter-ExperienceInputLabelSelect').removeClass('col-2');
    $('#patron-view-artist-filter-ExperienceInputLabelSelect').addClass('col-3');
    $('#patron-view-artist-filter-inputBoxExperience').removeClass('col-4');
    $('#patron-view-artist-filter-inputBoxExperience').addClass('col-6');
    $('#patron-view-artist-filter-AgeInputLabelSelect').removeClass('col-2');
    $('#patron-view-artist-filter-AgeInputLabelSelect').addClass('col-3');
    $('#patron-view-artist-filter-inputBoxAge').removeClass('col-4');
    $('#patron-view-artist-filter-inputBoxAge').addClass('col-6');
    {'{'}'{'}'}'{'}'} else {'{'}'{'{'}'{'}'}
    $('#patron-view-artist-filter-LocationInputLabel').addClass('col-2');
    $('#patron-view-artist-filter-LocationInputLabel').removeClass('col-3');
    $('#patron-view-artist-filter-inputBoxLocation').addClass('col-4');
    $('#patron-view-artist-filter-inputBoxLocation').removeClass('col-6');
    $('#patron-view-artist-filter-ArtInputLabelSelect').addClass('col-2');
    $('#patron-view-artist-filter-ArtInputLabelSelect').removeClass('col-3');
    $('#patron-view-artist-filter-LanguageInputLabelSelect').addClass('col-2');
    $('#patron-view-artist-filter-LanguageInputLabelSelect').removeClass('col-3');
    $('#patron-view-artist-filter-ExperienceInputLabelSelect').addClass('col-2');
    $('#patron-view-artist-filter-ExperienceInputLabelSelect').removeClass('col-3');
    $('#patron-view-artist-filter-ExperienceInputLabelSelect').addClass('col-2');
    $('#patron-view-artist-filter-ExperienceInputLabelSelect').removeClass('col-3');
    $('#patron-view-artist-filter-inputBoxExperience').addClass('col-4');
    $('#patron-view-artist-filter-inputBoxExperience').removeClass('col-6');
    $('#patron-view-artist-filter-AgeInputLabelSelect').addClass('col-2');
    $('#patron-view-artist-filter-AgeInputLabelSelect').removeClass('col-3');
    $('#patron-view-artist-filter-inputBoxAge').addClass('col-4');
    $('#patron-view-artist-filter-inputBoxAge').removeClass('col-6');
    {'{'}'{'}'}'{'}'};
    {'{'}'{'}'}'{'}'};
    $(window).resize(function () {'{'}'{'{'}'{'}'}
    alterClass();
    {'{'}'{'}'}'{'}'});
    //Fire it when the page first loads:
    alterClass();
    {'{'}'{'}'}'{'}'});




    {/* view contacted artist */}
  </div>
  
  jQuery(document).ready(function ($) {'{'}
  var alterClass = function () {'{'}
  var patronSearchArtistWW = document.body.clientWidth;
  if (patronSearchArtistWW &lt; 556) {'{'}
  $('#patron-view-artist-filter-LocationInputLabel').removeClass('col-2');
  $('#patron-view-artist-filter-LocationInputLabel').addClass('col-3');
  $('#patron-view-artist-filter-inputBoxLocation').removeClass('col-4');
  $('#patron-view-artist-filter-inputBoxLocation').addClass('col-6');
  $('#patron-view-artist-filter-ArtInputLabelSelect').removeClass('col-2');
  $('#patron-view-artist-filter-ArtInputLabelSelect').addClass('col-3');
  $('#patron-view-artist-filter-LanguageInputLabelSelect').removeClass('col-2');
  $('#patron-view-artist-filter-LanguageInputLabelSelect').addClass('col-3');
  $('#patron-view-artist-filter-ExperienceInputLabelSelect').removeClass('col-2');
  $('#patron-view-artist-filter-ExperienceInputLabelSelect').addClass('col-3');
  $('#patron-view-artist-filter-inputBoxExperience').removeClass('col-4');
  $('#patron-view-artist-filter-inputBoxExperience').addClass('col-6');
  $('#patron-view-artist-filter-AgeInputLabelSelect').removeClass('col-2');
  $('#patron-view-artist-filter-AgeInputLabelSelect').addClass('col-3');
  $('#patron-view-artist-filter-inputBoxAge').removeClass('col-4');
  $('#patron-view-artist-filter-inputBoxAge').addClass('col-6');
  {'}'} else {'{'}
  $('#patron-view-artist-filter-LocationInputLabel').addClass('col-2');
  $('#patron-view-artist-filter-LocationInputLabel').removeClass('col-3');
  $('#patron-view-artist-filter-inputBoxLocation').addClass('col-4');
  $('#patron-view-artist-filter-inputBoxLocation').removeClass('col-6');
  $('#patron-view-artist-filter-ArtInputLabelSelect').addClass('col-2');
  $('#patron-view-artist-filter-ArtInputLabelSelect').removeClass('col-3');
  $('#patron-view-artist-filter-LanguageInputLabelSelect').addClass('col-2');
  $('#patron-view-artist-filter-LanguageInputLabelSelect').removeClass('col-3');
  $('#patron-view-artist-filter-ExperienceInputLabelSelect').addClass('col-2');
  $('#patron-view-artist-filter-ExperienceInputLabelSelect').removeClass('col-3');
  $('#patron-view-artist-filter-ExperienceInputLabelSelect').addClass('col-2');
  $('#patron-view-artist-filter-ExperienceInputLabelSelect').removeClass('col-3');
  $('#patron-view-artist-filter-inputBoxExperience').addClass('col-4');
  $('#patron-view-artist-filter-inputBoxExperience').removeClass('col-6');
  $('#patron-view-artist-filter-AgeInputLabelSelect').addClass('col-2');
  $('#patron-view-artist-filter-AgeInputLabelSelect').removeClass('col-3');
  $('#patron-view-artist-filter-inputBoxAge').addClass('col-4');
  $('#patron-view-artist-filter-inputBoxAge').removeClass('col-6');
  {'}'};
  {'}'};
  $(window).resize(function () {'{'}
  alterClass();
  {'}'});
  //Fire it when the page first loads:
  alterClass();
  {'}'});
</div>

// function clearForm() {
//     document.getElementById("filter-form").reset();
// }



// patron registration

    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab

    function showTab(n) {
        var x = document.getElementsByClassName("tab");
        // // x[n].style.display = "block";
        // // // if (n == 0) {
        // // //     document.getElementById("prevBtn").style.display = "none";
        // // // } else {
        // // //     document.getElementById("prevBtn").style.display = "inline";
        // // // }
        // if (n == (x.length - 1)) {
        //     document.getElementById("nextBtn").innerHTML = "Submit";
        // } else {
        //     document.getElementById("nextBtn").innerHTML = "Next";
        // }
    }
    function nextPrev(n) {
        // This function will figure out which tab to display
        var x = document.getElementsByClassName("tab");
        if (n == 1 && !validateForm()) return false;
        x[currentTab].style.display = "none";
        currentTab = currentTab + n;
        if (currentTab >= x.length) {
            document.getElementById("regForm").submit();
            return false;
        }
        showTab(currentTab);
    }
    function validateForm() {
        // This function deals with validation of the form fields
        var x, y, i, valid = true;
        x = document.getElementsByClassName("tab");
        y = x[currentTab].getElementsByTagName("input");
        // z = x[currentTab].getElementsByTagName("select");
        for (i = 0; i < y.length; i++) {
            if (y[i].value == "") {
                y[i].className += " invalid";
                valid = false;
            } else {
                y[i].classList.remove("invalid")
            }
        }
        var selectionAge = document.getElementById("patron-reg-inputs-selection-age");
        var selectedAgeValue = selectionAge.options[selectionAge.selectedIndex].value;

        if (selectedAgeValue == "choose") {
            // z.className += " invalid";
            selectionAge.classList.add("invalid");
            valid = false;
        } else {
            selectionAge.classList.remove("invalid");
            // valid = true;
        }
        if (document.getElementById("phone").value == "" || isNaN(document.getElementById("phone").value) || document.getElementById("phone").value.length < 10 || document.getElementById("phone").value.length > 10) {
            document.getElementById("phone").classList.add("notvalid")
            valid = false;
        } else {
            document.getElementById("phone").classList.remove("notvalid")
        }
        return valid;
    }
