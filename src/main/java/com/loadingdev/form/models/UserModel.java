package com.loadingdev.form.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class UserModel {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public String name;

    public String email;

    public String password;

    public LocalDateTime date;

    public Boolean newsletter;

    public UserModel() {}
    public UserModel(String name, String email, String password, LocalDateTime date, Boolean newsletter) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.date = date;
        this.newsletter = newsletter;
    }

}
