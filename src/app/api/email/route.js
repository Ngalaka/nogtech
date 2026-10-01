import Email from "@/app/models/emailModel";
import connectToDb from "@/lib/connection";

export const POST = async (req) => {
  try {
    // Get data from the request body
    const {
      firstname,
      lastname,
      email,
      mobile,
      emailType,
    } = await req.json();

    console.log(firstname, lastname, email, mobile, emailType);

    // Validate required fields
    if (!firstname || !lastname || !email || !mobile) {
      return Response.json(
        {
          error:
            "Missing required fields: firstname, lastname, email, or mobile",
        },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectToDb();

    // Check if email already exists
    const existingEmail = await Email.findOne({ email });

    if (existingEmail) {
      return Response.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    // Create new email record
    const newEmail = await Email.create({
      firstname,
      lastname,
      email,
      mobile,
      emailType: emailType || "myself",
    });

    // Check if creation failed
    if (!newEmail) {
      return Response.json(
        { error: "Failed to create email" },
        { status: 500 }
      );
    }

    // Successful response
    return Response.json(
      {
        message: "Email sent successfully",
        data: newEmail,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during email sending:", error);

    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};