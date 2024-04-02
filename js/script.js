// Copyright (c) 2020 Kenneth All rights reserved
//
// Created by: Kenneth
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function findAreaClicked() {
  const radiusInput = parseInt(document.getElementById("radius-of-circle").value)
  const area = (radiusInput ** 2) * 3.14
  document.getElementById("answer").innerHTML = "The area is: " + area.toFixed(2) + " cm<sup>2"
}