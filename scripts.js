document.addEventListener('DOMContentLoaded', function() {
 const messages = [
        "ΤΕΣΤ 1,θεωρητικά αυτό πρέπει να εμφανίζεται όταν πατάς το 1ο κουμπί, αν όχι είναι randomized, όχι ότι έχει κάποια σημασία :)",
        "Σ'αγαπώ μέλι, πολύ",
        "If you need to, darling, lean your weight to me We'll float away, but if we fall I only pray, don't fall away from me -I, carrion (Icarian) Hozier",
        "Distance means SO little when someone means SO much. - Απο εκείνο το παιχνίδι",
        "I love her, and that's the beginning and end of everything. - παιχνίδι",
        "Please stay, I want you, I need you, oh God",
        "I will always love you - keep driving",
        "Just say you won't let go",
        "And when I felt like I was an old cardigan under someone's bed, you put me on and said I was your favourite-cardigan",
        "Βαριέμαι να γράφω τους τίτλους από κάποια οπότε αν τους θες ρώτα με, αν και δεν νομίζω να σε νοιάζει πολύ",
        "If I could hold you for a minute darling I would do it again. - Francesca Hozier",
        "Hope we grow old but we never grow up - Never grow up Niall",
        "Μου λείπεις πολύ",
        "You could've hated my scars, instead you kissed them. ",
        "If love is real, I think I found it in yours - το ίδιο με το προηγούμενο",
        "Anywhere, whenever, apart but still together.",
        "Πολλα από αυτά στα έχω ξαναπεί/ξαναγραψει/ξανά-αφιερώσει αλλά ελπίζω να μην σε πειράζει, τα εννοώ με όλη μου την καρδιά",
        "And it feels good to be known so well I can't hide from you like I hide from myself - True Blue",
        "You're the person that I love to see Even when I don't want no company Somehow it's different cause it's you",
        "And I'II be here 'Cause we both know how it goes I don't want things to change I pray they stay the same always",
        "I don't wanna change Have it any other way Promise that you'll stay this close-If you leave me",
        "Can't you stay for the rest of my life - ιδιο με πριν",
        "Thought that I was happy on my own Then you came along Made me realise that I was wrong",
        "There's a million little reasons For why I want you here \nThere's a million little reasons For why I want you near",
        "Tell me what's inside of your head No matter what you say I won't love you less",
        "πληροφοριακά, δεν είναι όλα τραγούδια.",
        "I promise to love you in every universe",
        "Κάθε φορά που βλέπω τα αστέρια, το φεγγάρι, το ηλιοβασίλεμα, σύννεφα, λουλούδια, οτιδήποτε όμορφο, εκτός από το γεγονός ότι θα ήθελα να είσαι εκεί μαζί μου, το μόνο που θέλω να κάνω είναι να σου πω ότι σαγαπω",
        "Το μόνο που θέλω είναι να σε αγκαλιάσω και να σε φιλήσω για να γεμίσω επιτέλους πάλι",
        "Μακάρι να μπορούσα να μείνω εκεί για πάντα",
        "You are always worth fighting for",
        "Στο τραγούδι To noise making (sing) λεει πολλες φορες honey ο Hozier",
        "Η φωνή σου με ηρεμεί",
        "I hate accidents except when we went from friends to this",
        "Anyway, don't be a stranger - Scott street",
        "Cause you kiss me and it stops time - say don't go",
        "Συγνώμη για ότι κάνω, ότι λέω, ότι είμαι που σε ενοχλεί και σε πειράζει",
        "Τον κώδικα τον έγραψα στο αεροδρόμιο και αυτά τα μηνύματα μέσα στο αεροπλάνο. Αυτά είναι πιο δύσκολα από τον κώδικα είναι πολλά",
        "Μας δώσανε παστέλι, μάντεψε τι έχει το παστέλι :) ",
        "Μέλι ήταν η απάντηση",
        "Τι παστέλι ρε μαλακες δώστε κανένα μπισκότο να φάω, τόση ώρα ανυπομονούσα για μπισκότα :')",
        "There's nothing sweeter than my baby - work song",
        "This love is difficult but it's real, don't be afraid we'll make it out of this mess- Love story",
        "Γαμησε το παστέλι τελικά",
        "Δεν μπορώ να φανταστώ τον μικρό μου κόσμο χωρίς εσένα",
        "Cause I see sparks fly whenever you smile",
        "I would never fall in love again until I found her",
        "When I feel blue in the night and I need you to hold me tight whenever I want you all I have to do is dream - all I have to do is dream",
        "I want you to stay till I'm in the grave - Birds of a feather",
        "might not be forever but if it's forever it's even better - ιδιο με πριν",
        "I'll love you till the day that I die - πάλι ίδιο με πριν",
        "Το χαμόγελο σου είναι ότι πιο όμορφο ρε, σε σκέφτομαι τώρα στο αεροπλάνο και γελάω σαν χαζό",
        "I could eat that girl for lunch - Lunch Billie Eilish",
        "Loving you is easy because you are you.",
        "Σε ευχαριστώ για όλα γενικά, σε αγαπάω σε λατρεύω",
        "Αν δεν μας χώριζε τόση απόσταση θα σου έγραφα σε χαρτάκια όλα αυτά και ότι σου στέλνω σε μηνύματα και θα στα έφερνα περιοδικά μαζί με λουλούδια. Ελπίζω κάποια μέρα να το κάνω.",
        "Lover be good to me",
        "Ελπίζω να μην ξεχάσω κανένα και να δεις ένα random 'Message for button xx' γιατί τα 100 μηνύματα τα έβαλα αυτόματα να εμφανιστούν και να τα κανω εντιτ 'χαρούμενη φατσουλα που κλαίει γέλασα'",
        "ολόκληρο το τραγούδι 'σε θέλω εδω' στο αφιερώνω ξανά και ξανά και ξανά",
        "Έτσι μια ζωή θα σαγαπω - Το τσιγάρο, μπορεί να μην είναι το πιο χαρούμενο τραγούδι αλλά ο τίτλος έχει ιδιαίτερη σημασία για εμάς και επίσης ο συγκεκριμένος στίχος",
        "Mg heart is yours, it's you that I hold on to - sparks",
        "Σε θέλω",
        "Θα έρθω στο υπόσχομαι",
        "Θέλω απλά να είσαι εδώ γιατί όταν λείπεις έχω μούτρα όλη μέρα (ισχύει)",
        "ΑΝΑΝΑΣ",
        "ΝΤΑΜΠΛ ΑΝΑΝΑΣ",
        "ΤΡΙΠΛ ΑΝΑΝΑΣ",
        "Ελπίζω μια μέρα απλά να σου πω ένα σ'αγαπώ και να νιώσεις επιτέλους πόσο μα πόσο πολύ το εννοώ, να γεμίσεις από αγάπη, να νιώσεις αυτό που νιώθω ότι μέσα μου πολλές φορές πάει να με σκάσει και είναι τόσο τεράστιο που δεν μπορώ να το διαχειριστω. Πρώτη φορά βέβαια που κάτι τόσο μεγάλο που δεν μπορώ ούτε να ελέγξω, αλλά όπως είπα ούτε να διαχειριστω, δεν με ενοχλεί, δεν θέλω να το διώξω, θέλω να μείνει εδώ για πάντα. Μακάρι να μείνεις εδώ για πάντα.",
        "69",
        "If I ever were to lose you I'd surely lose myself (κι ας μου λες ότι δεν ισχύει) - future days από το tlou",
        "να μ'αγκαλιάζεις για να σ'αισθάνομαι\nΚι αν δεις να χάνομαι να με ανεβάζεις\nΝα με ησυχάζεις και να με νοιάζεσαι\nΝα με χρειάζεσαι όπως κι εγώ -Φτάνει που κλαίμε (στο αφιερώνω και αυτό)",
        "Αχ, να 'ξερες τι δύναμη μου δίνει η δύναμή σου\nΣαν λες όλα θα γίνουνε κι ακούω τη φωνή σου",
        "Όταν έχω εσένα, ότι λέει + τον εμετό",
        "Μου λείπεις",
        "Σε λατρεύω",
        "Σε υπερλατρευω",
        "you could stand still in complete silence for eternity and i would still feel inspired to find new ways to love you ",
        "Μου αρέσει πολύ κυρίως όταν με λες ψυχή σου ή καρδιά σου που με είπες τις προάλλες όταν κλείσαμε 8 μήνες. Λιώνω ελπίζω να το καταλαβαίνεις",
        "Δίχως τη δική σου αγάπη \nδύσκολα περνά ο καιρός. \nΔίχως τη δική σου αγάπη \nείναι ο κόσμος πιο μικρός. \n- Χάρτινο το φεγγαράκι",
        "Θα έρθω στο υπόσχομαι",
        "When I'm with my baby yeah all the bad things disappear - I don't care Ed sheeran (το ακουστικ μου αρέσει περισσότερο, ίσως επειδή είμαι ακουστική, το είχα ανεβάσει και στα notes για εσένα) ",
        "Για να επιβεβαιώσω ότι τα είδες όλα, στείλε μου skibidi toilet",
        "Όχι πλιζ μην το κάνεις",
        "Άπειρα",
        "Ανεξαντλητα",
        "Απεριόριστα",
        "Αμέτρητα",
        "Ατελείωτα",
        "Αδιάκοπα",
        "Ασταμάτητα",
        "Ανιδιοτελως",
        "Ακατάπαυστα",
        "Αναρίθμητα",
        "Σ'αγαπώ ρε μλκ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ σ'αγαπώ ρε γαμωτο σ'αγαπώ οως σκατα θα το βγάλω από μέσα μου, όλο και πιο πολύ, κάθε μέρα που περνάει σε αγαπάω περισσότερο",
        "Να μ'αγαπας (και εσύ)",
        "Και το it will come back του hozier εχει πολυ honey ",
        "θέλω απλά να είσαι εδώ όταν ξυπνάω να μου λες μια καλημέρα\nΘέλω απλά να είσαι εδώ να σε κοιτάζω να μου φτιάχνεις την ημέρα - Να είσαι εδώ (ακουστικ βερζιον)",
        " Melõ wò ",
        "ΣΕ ΑΓΑΠΑΩ ΥΠΕΡΒΟΛΙΚΑ ΠΟΛΥ ΓΑΜΩ ΠΩΣ ΚΑΙ ΓΙΑΤΙ ΚΑΙ Α",
        "You know I love you so - yellow"
    ];
    const buttonsContainer = document.getElementById('buttons-container');

    for (let i = 1; i <= 100; i++) {
        const button = document.createElement('button');
        button.textContent = `Button ${i}`;
        button.addEventListener('click', () => showMessage(i));
        buttonsContainer.appendChild(button);
    }

    function showMessage(index) {
        const popup = document.getElementById('popup');
        const message = document.getElementById('popup-message');
        message.textContent = messages[index - 1];
        popup.style.display = 'block';
    }
});

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
