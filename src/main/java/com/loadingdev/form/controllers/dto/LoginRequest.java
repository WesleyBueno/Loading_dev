package com.loadingdev.form.controllers.dto;

public class LoginRequest {

    public final String email;
    public final String password;

    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
