package com.loadingdev.form.controllers;

import com.loadingdev.form.controllers.dto.LoginRequest;
import com.loadingdev.form.controllers.dto.UserRequest;
import com.loadingdev.form.models.UserModel;
import com.loadingdev.form.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;

@RestController
public class FormController {

    final UserRepository repository;

    public FormController(UserRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/form")
    public ResponseEntity<?> signUp(@Valid @RequestBody UserRequest request, UriComponentsBuilder uriBuilder) {
        var user = request.toModel();
        repository.save(user);
        var uri = uriBuilder.path("/users/{id}").build(user.id);
        return ResponseEntity.created(uri).build();
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {
        var user = repository.findByEmail(request.email);

        if (user.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return user.map(u -> {
            if (u.password.equals(request.password)) {
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        }).get();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserModel> getUser(@PathVariable Long id) {
        return repository.findById(id).map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


}
