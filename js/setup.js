'use strict';

var similarList = document.querySelector('.setup-similar');
similarList.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_COLOR_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_LAST_NAME = ['да Мария', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COLOR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];
var rendomDataGenerator = function () {
  for (var i = 0; i < 4; i++) {
    var wizard = {
      name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_LAST_NAME[Math.floor(Math.random() * WIZARD_LAST_NAME.length)],
      coatColor: WIZARD_COLOR_COATS[Math.floor(Math.random() * WIZARD_COLOR_COATS.length)],
      eyeColor: WIZARD_COLOR_EYES[Math.floor(Math.random() * WIZARD_COLOR_EYES.length)]
    };
    wizards.push(wizard);
  }
  return wizards;
};
rendomDataGenerator();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;
  return wizardElement;
};

var createBlock = function (arrElement) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    var element = arrElement[i];
    fragment.appendChild(renderWizard(element));
  }
  return fragment;
};

similarListElement.appendChild(createBlock(wizards));

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
