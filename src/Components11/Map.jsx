const Map = () => {
  return (
    <div>
        <div className="">
            <h1 className="text-center mt-10 font-bold text-3xl">Find us in Google Map </h1>
        </div>
      <div className="flex justify-center mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29182.018192178748!2d90.30683357555648!3d23.898401565111314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c25a71cf5873%3A0xd64e6f32619e3132!2sAshulia!5e0!3m2!1sen!2sbd!4v1715606858121!5m2!1sen!2sbd"
          className="w-full h-[500px] px-20"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
