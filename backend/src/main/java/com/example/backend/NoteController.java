package com.example.backend;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class NoteController {

    @GetMapping("/notes")
    public List<Note> getNotes() {
        List<Note> note = new ArrayList<>();
        note = List.of(new Note("Title", "Description"), new Note("Titles", "Descriptions"));
        return note;
    }

}
