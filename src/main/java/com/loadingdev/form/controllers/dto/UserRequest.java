package com.loadingdev.form.controllers.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.loadingdev.form.models.UserModel;

import java.time.LocalDateTime;

public class UserRequest {

    public final String name;
    public final String email;
    public final String password;
    public final LocalDateTime date;
    public final Boolean newsletter;

//    @JsonCreator
    public UserRequest(String name, String email, String password, LocalDateTime date, Boolean newsletter) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.date = date;
        this.newsletter = newsletter;
    }

    public UserModel toModel() {
        return new UserModel(name, email, password, date, newsletter);
    }
}
