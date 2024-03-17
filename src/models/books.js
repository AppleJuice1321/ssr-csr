import { Schema, model, models } from "mongoose";

// Alle const med stort begyndelsesbogstav er automatisk et object HUSK DET!!!
// Instanz
const BookSchema = new Schema(
    // I skemaet kan der være nogle den skaæ have med for at den overhovede viser noget og derfor bruger man et slags "required"
  {
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    pages: Number,
    summary: String,
    cover: String,
  },
  {
    // Fortæl mongo med hvad den skal gøre med vores skema ovenover
    // Der laves timestamps også
    timestamps: true,
  }
);

// Her laves en model som skal følge en datastruktur
// her valgte vi den ovenover eller hvis den ikke ertilgængelig så tages strukturen fra den originale
export default models.Book || model("Book", BookSchema);
