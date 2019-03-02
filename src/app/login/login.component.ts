import { Component, OnInit } from '@angular/core';
import * as express from 'express';
import * as request from 'request'; // "Request" library
import * as cors from 'cors';
import * as querystring from 'querystring';
import * as cookieParser from 'cookie-parser';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Spotted.';

  constructor() { }

  ngOnInit() {
  }

}
